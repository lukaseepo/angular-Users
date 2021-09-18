import { Component, OnInit } from '@angular/core';
import { User } from "../../users/user.model";
import {UsersService} from "../../users/users.service";
import {FormGroup, Validators, ValidationErrors, FormBuilder} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  text:string = 'Register';
  id:number;
  list:any[] = [];
  constructor(private user: UsersService, private fb: FormBuilder, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((param:Params)=>{
      this.id = param.id;
      if(param.id){
        this.text = 'Edit';
      }
    })
    this.patchValue();
  }

  patchValue(){
    this.user.getUserById(this.id).subscribe((item:User)=>{
      this.form.patchValue(item);
    })
  }


  form:FormGroup = this.fb.group({
    email:['', [
      Validators.email,
      Validators.required
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[A-Za-z0-9]+$')
    ]],
    confirmedPassword: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^[A-Za-z0-9]+$'),
    ]],
    nickname:['', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9^-_. +]+$')
    ]],
    number: ['',[
      Validators.required,
      Validators.pattern('^((\\+380-?))?[0-9]{9}$')
    ]],
    website: ['', [
      Validators.required,
      Validators.pattern('^(http(s?):\/\/)?(www\.)+[a-zA-Z0-9\.\-\_]+(\.[a-zA-Z]{2,3})+(\/[a-zA-Z0-9\_\-\s\.\/\?\%\#\&\=]*)?$')
    ]],
    agree:['', [
      Validators.requiredTrue
    ]],
  })

  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
  }
  get confirmedPassword(){
    return this.form.get('confirmedPassword');
  }
  get website(){
    return this.form.get('website');
  }
  get agree(){
    return this.form.get('agree');
  }
  get nickname(){
    return this.form.get('nickname');
  }
  get number(){
    return this.form.get('number');
  }


  submit(): void{
    let user:User = {
      email: this.form.value.email,
      password:  this.form.value.password,
      nickname:  this.form.value.nickname,
      number:  this.form.value.number,
      website:  this.form.value.website,
    }
    if(this.text === 'Register'){
      this.user.postUsers(user).subscribe((item:User)=>{
        this._router.navigate(['users']);
      });
    }else{
      this.user.putUser(user, this.id).subscribe((item:User)=>{

      })
    }

  }

}




