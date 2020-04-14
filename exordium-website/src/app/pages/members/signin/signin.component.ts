import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

import { jarallax, jarallaxElement } from 'jarallax';

import * as jQuery from 'jquery';
const $ = jQuery;

import 'bootstrap-notify';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      remember: [null],
      recaptcha: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.jarallaxInit();
  }

  get f() {
    return this.signinForm.controls;
  }

  jarallaxInit() {
    jarallaxElement();
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });
  }

  onSubmit() {
    const sourceButton = $('.submitSignin');

    sourceButton.attr('disabled', true);
    sourceButton.addClass('m-progress');

    const notify = $.notify({
      icon: 'fa fa-fw fa-info-circle',
      message: '<strong>Trying to sign you in!</strong> This could take a moment...'
    }, {
      type: 'primary',
      placement: {
        from: 'bottom',
        align: 'right'
      },
      showProgressbar: true,
      delay: 10000,
      animate: {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutUp'
      },
      template: '<div data-notify="container" class="notify-width alert alert-{0}" role="alert">' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '<div class="progress notifyAlert" data-notify="progressbar">' +
          '<div class="progress-bar bg-{0}" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0"></div>' +
        '</div>' +
      '</div>'
    });

    // test the data
    if (this.signinForm.invalid) {
      notify.update({
        type: 'danger',
        icon: 'fa fa-fw fa-times',
        message: `<strong>Error!</strong> Please make sure you enter all the fields properly.`
      });
    } else {

      this.authService.signin(this.signinForm.value).subscribe((res) => {
        localStorage.setItem('access_token', res.token);

        this.authService.getUserData().subscribe(
            (res) => {
                this.router.navigate([`/dashboard`]);
            }
        );

        notify.update({
          type: 'success',
          icon: 'fa fa-fw fa-check',
          message: `<strong>Success!</strong> You've successfully signed into Exordium.`
        });
      },
      (err) => {
        notify.update({
          type: 'danger',
          icon: 'fa fa-fw fa-times',
          message: `<strong>Error!</strong> Please check that your email and password are correct.`
        });
      });
    }

    setTimeout(function() {
      sourceButton.removeAttr('disabled');
      sourceButton.removeClass('m-progress');
    }, 2000);

  }

}
