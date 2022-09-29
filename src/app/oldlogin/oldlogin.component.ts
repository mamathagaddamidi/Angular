import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../user.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-oldlogin',
  templateUrl: './oldlogin.component.html',
  styleUrls: ['./oldlogin.component.css']
})
export class OldloginComponent implements OnInit {
  email : any;
  password : string;
  flag : boolean;
  user : any;

  constructor(private router:Router,private service:UserService) {
    this.email = '';
    this.password = '';
    this.flag = false;
    // this.users = {sname:'',email:'',password:''};
  }

  ngOnInit(): void {
  }
  loginSubmit(loginForm:any) : void {
    console.log(loginForm.email);
    console.log(loginForm.password);
    this.email = loginForm.email;
    this.password=loginForm.password;
    // this.service.getUserEmailAndPassword(loginForm).subscribe((result:any)=>console.log(result));
    this.service.getUserEmailAndPassword(loginForm).subscribe((result:any)=>this.checkCred(result));
    // console.log(this.email);
    //   alert("Working");
    // }
    // else{
    //    alert("Not Working");
    // }
    // this.service.setUserLoggedIn();
    // console.log("User Id : " + this.email);
    // console.log("Password : " + this.password);
  }
  newLogin(){
    console.log("Working");
    //  this.router.navigate(['/test']);
    this.router.navigateByUrl('/register')
   }
   checkCred(users:any){
     if(users==null){
       alert("Invalid username or password");
     }
     console.log(users.email);
     console.log(users.password);
     console.log(this.email);
     console.log(this.password);
    if(users.email===this.email || users.password===this.password){
        //  alert("Logged in");
        this.flag=true;
        this.user=users;
        localStorage.setItem('Users',JSON.stringify(this.user));
         this.router.navigateByUrl('/homepage');
    }
    if(this.flag==false){
         alert("Incorrect password or email");
    }
   }
}


