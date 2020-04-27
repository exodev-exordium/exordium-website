import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

import { Countries } from 'src/app/service/country.component';
import { MustMatch } from 'src/app/helpers/mustmatch.validator';

import { jarallax, jarallaxElement } from 'jarallax';

import * as jQuery from 'jquery';
const $ = jQuery;

import 'bootstrap-notify';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  countries: any;
  selectedCountry: any;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.countries = new Countries().countries;

    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      realname: [null],
      country: [null],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, Validators.required],
      recaptcha: [null, Validators.required]
    }, { validator: MustMatch('password', 'confirmPassword') });

    this.initPlugins();
  }

  get f() {
    return this.registerForm.controls;
  }

  initPlugins() {
    // Jarallax
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
      message: '<strong>Sending your registration request!</strong> This could take a moment...'
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
    if (this.registerForm.invalid) {
      notify.update({
        type: 'danger',
        icon: 'fa fa-fw fa-times',
        message: `<strong>Error!</strong> Please make sure you enter all the fields properly.`
      });
    } else {

      this.authService.register(this.registerForm.value).subscribe((res) => {
        if (res.result) {
          this.registerForm.reset();
          this.router.navigate(['members/signin']);

          notify.update({
            type: 'success',
            icon: 'fa fa-fw fa-check',
            message: `<strong>Success!</strong> Your Exordium account has been successfully created!`
          });
        }
      },
      (err) => {
        notify.update({
          type: 'danger',
          icon: 'fa fa-fw fa-times',
          message: `<strong>Error!</strong> Please check that the fields you entered are all correct.`
        });
      });
    }

    setTimeout(() => {
      sourceButton.removeAttr('disabled');
      sourceButton.removeClass('m-progress');
    }, 2000);

  }

}
