import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jarallax, jarallaxElement } from 'jarallax';
import { AuthService } from 'src/app/service/auth.service';

import * as jQuery from 'jquery';
let $ = jQuery;

import 'bootstrap-notify';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      companyName: [null],
      phone: [null, Validators.pattern("[0-9 ]{11}")],
      message: [null, Validators.required],
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
    return this.contactForm.controls;
  }

  onSubmit() {
    var sourceButton = $(".submitContact");

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
    if (this.contactForm.invalid) {
      notify.update({
        'type': 'danger',
        'icon': 'fa fa-fw fa-times',
        'message': `<strong>Error!</strong> Please make sure you enter all the fields properly.`
      });
    } else {

      notify.update({
        'type': 'danger',
        'icon': 'fa fa-fw fa-times',
        'message': `<strong>Error!</strong> Sending emails is currently disabled as this feature hasn't been completed yet.`
      });
    }

    setTimeout(function () {
      sourceButton.removeAttr("disabled");
      sourceButton.removeClass("m-progress");
    }, 2000);

  }

  // for testing
  recaptchaResolved (event: string) {
    console.log(`Recaptcha Event: ${event}`);
  }

}
