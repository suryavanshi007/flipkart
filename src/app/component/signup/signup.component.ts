import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    
  }
  signupForm= this.formBuilder.group({
    fullname:[''],
    email:[''],
    password:[''],
  }) 
  signUp(){
    console.log(this.signupForm.value);
    
    this.http.post<any>("http://localhost:8002/addUser", this.signupForm.value)
    .subscribe(res =>{
      alert("SignUp Successfull");
      this.signupForm.reset(); 
      this.router.navigate(['login']);

    }, err =>{
      alert("Something went wrong")
    })
    
  }
}
