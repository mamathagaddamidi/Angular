import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  userdetails:any;
  constructor(private service:UserService) {}

  ngOnInit(): void {
    this.service.showAllUsers().subscribe((result)=>{this.userdetails=result;});
  }

}
