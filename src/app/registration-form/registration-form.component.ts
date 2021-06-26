import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from '../registration-from';

@Component({
  selector: 'app-registration-form',
  templateUrl: 'registration-form.component.html',
  styleUrls: ['registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationModel: Registration = null;
  submitted = false;

  constructor() {}

  ngOnInit() {
    this.registrationModel = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      streetAddressLine1: '',
      streetAddressLine2: '',
      city: '',
      state: '',
      country: '',
      pincode: ''
    };
  }

  onSubmit(registationForm: NgForm) {
    if (registationForm.valid) this.submitted = true;
  }
}
