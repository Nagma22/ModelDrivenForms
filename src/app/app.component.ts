
import { Component } from '@angular/core';

import { FormGroup, Validators} from '@angular/forms';

import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Model-Driven-Form';

  contactForm : FormGroup;

  onSubmit()
  {
    console.log(this.contactForm.value);
  }

  constructor(private fb : FormBuilder)
  {
    this.contactForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: [],
      address: this.fb.group({
         city :[], 
         street: [],
         pincode: []
      })
  });
  }
}
