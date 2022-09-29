import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.css']
})
export class DiscussComponent implements OnInit {
  discuss:any;
  user:any;
  user1:any;
  all_discussions:any;
  constructor(private service:UserService,private httpClient:HttpClient) {
    this.discuss = {id:"",email:"",comment:""};

   }

  ngOnInit(): void {
    this.user=localStorage.getItem("Users");
    this.user1 = JSON.parse(this.user);
  }
  addDis(disForm:any){
    this.discuss.email=this.user1.email;
    console.log(this.discuss.email);
    this.discuss.comment=disForm.comment;
    // console.log(this.comments.email);
    console.log(this.discuss.comment);
    this.service.addDis(this.discuss).subscribe();
  }
  showDis(){
    this.service.showDis().subscribe((result)=>{this.all_discussions=result;});
  }

}
