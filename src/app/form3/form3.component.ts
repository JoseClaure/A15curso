import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component {

  constructor(private fb:FormBuilder) {

  }

  get name() {
    return this.formUser.get('name') as FormControl;
  }
  get email() {
    return this.formUser.get('email') as FormControl;
  }

  /*
  formUser = new FormGroup({
    'name':new FormControl('', Validators.required),
    'email':new FormControl('', [Validators.required, Validators.email])
  });
  */

  formUser = this.fb.group({
    'name':['', Validators.required],
    'email':['', Validators.required, Validators.email]
  });
  

  procesar(){
    console.log(this.formUser.value)
  }
  // name = new FormControl('', Validators.required);
  // email = new FormControl('', [Validators.required, Validators.email]);

}