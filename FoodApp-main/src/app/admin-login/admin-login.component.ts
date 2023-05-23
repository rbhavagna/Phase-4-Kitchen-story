import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {


  public loginForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private http:HttpClient, private router:Router){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }


  login(){
    this.http.get<any>("http://localhost:3000/signup")
    .subscribe(res=>{
     const user = res.find((a:any)=>{
       return a.username === this.loginForm.value.password && a.username === this.loginForm.value.password
     })
     if(user){
       this.loginForm.reset();
       this.router.navigate(['home'])
     }
     
    })
    
   }
}


