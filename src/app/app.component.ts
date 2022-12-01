import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  get userName(){

    return this.registrationForm.get('usarName')
  }


constructor(private fb: FormBuilder){}

registrationForm: any= this.fb.group({
  userName: ['',[ Validators.required, Validators.minLength(3)]],
  password: [''],
  confirmPassword: [''],
  address: this.fb.group({
    city: [''],
    state: [''],
    postalCode: ['']
    

 })
  
})



  // registrationForm = new FormGroup({
  //   userName: new FormControl('Vishwas'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })


  // });

  loadApiData(){
    this.registrationForm.patchValue({
      userName: '',
      password: '',
      confirmPassword: '',
      // address: {
      //   city: 'City',
      //   state: 'State',
      //   postalCode: '123456'
      // }
    })
  }
}
