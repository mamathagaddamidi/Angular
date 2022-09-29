import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
  c_comments:any;
  user:any;
  user1:any;
  allC_comments:any;
  constructor(private service:UserService,private httpClient:HttpClient) {
    this.c_comments = {id:"",email:"",comment:""};
   }

  ngOnInit(): void {
    this.user=localStorage.getItem("Users");
    this.user1 = JSON.parse(this.user);
  }
  cAddComment(cForm:any){
    this.c_comments.email=this.user1.email;
    console.log(this.c_comments.email);
    this.c_comments.comment=cForm.comment;
    // console.log(this.comments.email);
    console.log(this.c_comments.comment);
    this.service.cAddComment(this.c_comments).subscribe();
  }
  cShowComments(){
    this.service.cShowComments().subscribe((result)=>{this.allC_comments=result;});
  }

}
