import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  jarallax,
  jarallaxElement
} from 'jarallax';

import * as jQuery from 'jquery';
import 'bootstrap-notify';

import { RecaptchaComponent } from 'ng-recaptcha';

let $ = jQuery;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      remember: [null],
      recaptcha: [null, Validators.required]
    });

    this.jarallaxInit();
  }

  jarallaxInit() {
    jarallaxElement();
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });
  }

  get f() {
    return this.signinForm.controls;
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
    if (this.signinForm.invalid) {
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
