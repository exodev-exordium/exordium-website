import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  loading = false;
  success = '';
  error = '';

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      companyName: [null],
      phone: [null],
      message: [null, Validators.required]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.loading = true;


    // send to api


    // Thanks, a member of our team will be in touch shortly.
    // Please fill all fields correctly.
    this.error = "Sending emails is currently disabled as this feature hasn't been completed yet.";
  }

}
