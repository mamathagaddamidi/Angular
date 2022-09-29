import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userdetails : any;
  c_pwd:string;
  
  constructor(private httpClient:HttpClient,private service:UserService,private router:Router) { 
    this.userdetails={id:' ',sname:' ',email : ' ',password : ' '};
    this.c_pwd="";
  }

  ngOnInit(): void {
  }
  checkPwd(){
    console.log("Check");

  }
  async signUp(registerForm:any){
    // alert(this.email);
    console.log(registerForm.password);
    console.log(registerForm.c_password);
    this.userdetails.sname = registerForm.sname;
    this.userdetails.email = registerForm.email;
    this.userdetails.password = registerForm.password;
    console.log(this.userdetails.sname);
    console.log(this.userdetails.email);
    console.log(this.userdetails.password);
    this.service.getUserEmailAndPassword(registerForm).subscribe((result:any)=>this.userRegister(result,registerForm));
  }
  
  userRegister(result:any,registerForm:any){
    if(result!=null){
      alert("Email already exists");
    }
    if(result==null){
      if(registerForm.password===registerForm.c_password){
        this.service.userRegister(this.userdetails).subscribe();
    // this.service.showAllUsers().subscribe();
        alert("Registered");
        this.router.navigate(['/login']);
      }else{
        alert("Check Password");
      }
    }
  }

}
