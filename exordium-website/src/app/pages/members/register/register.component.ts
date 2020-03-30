import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Countries } from 'src/app/service/country.component';

import { jarallax, jarallaxElement } from 'jarallax';

import * as jQuery from 'jquery';
let $ = jQuery;

import 'bootstrap-notify';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  countries: any;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.countries = new Countries().countries;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      realname: [null],
      country: [null, Validators.required],
      password1: [null, Validators.required],
      password2: [null, Validators.required],
      recaptcha: [null, Validators.required]
    });

    this.initPlugins();
  }

  ngAfterViewInit() {
    $('select').selectpicker('render');
  }

  initPlugins() {
    // Jarallax
    jarallaxElement();
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });
  }

  onSubmit() {
    var sourceButton = $(".submitSignin");

    sourceButton.attr("disabled", true);
    sourceButton.addClass("m-progress");

    var notify = $.notify({
      icon: 'fa fa-fw fa-info-circle',
      message: '<strong>Sending your contact request!</strong> This could take a moment...'
    },{
      type: 'primary',
      placement: {
        from: "bottom",
        align: "right"
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
        'type': 'danger',
        'icon': 'fa fa-fw fa-times',
        'message': `<strong>Error!</strong> Please make sure you enter all the fields properly.`
      });
    } else {

      notify.update({
        'type': 'danger',
        'icon': 'fa fa-fw fa-times',
        'message': `<strong>Error!</strong> Signing in is currently disabled.`
      });
    }

    setTimeout(function () {
      sourceButton.removeAttr("disabled");
      sourceButton.removeClass("m-progress");
    }, 2000);

  }

  recaptchaResolved (event: string) {
    console.log(`Recaptcha Event: ${event}`);
  }

}
