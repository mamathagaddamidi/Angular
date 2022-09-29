import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-cpp',
  templateUrl: './cpp.component.html',
  styleUrls: ['./cpp.component.css']
})
export class CppComponent implements OnInit {
  cpp_comments:any;
  user:any;
  user1:any;
  allCpp_comments:any;
  constructor(private service:UserService,private httpClient:HttpClient) { 
    this.cpp_comments = {id:"",email:"",comment:""};
  }

  ngOnInit(): void {
    this.user=localStorage.getItem("Users");
    this.user1 = JSON.parse(this.user);
  }
  cppAddComment(cppForm:any){
    this.cpp_comments.email=this.user1.email;
    console.log(this.cpp_comments.email);
    this.cpp_comments.comment=cppForm.comment;
    // console.log(this.comments.email);
    console.log(this.cpp_comments.comment);
    this.service.cppAddComment(this.cpp_comments).subscribe();
  }
  cppShowComments(){
    this.service.cppShowComments().subscribe((result)=>{this.allCpp_comments=result;});
  }

}
