import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../service/user.service";
import { User } from "../model/user.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass']
})
export class ListUserComponent implements OnInit {

  users : User[];

  constructor(private router: Router, private userService : UserService) { }

  ngOnInit() {

   this.userService.getUsers().subscribe(
   data => {console.log("HI"+JSON.stringify(data));this.users = data ;}
   );
  }

  deleteUser(user: User) : void  {
   this.userService.deleteUser(user).subscribe(data => {
   	this.users = this.users.filter( u => u !== user);
  
  })

  };


  editUser(user: User): void {

   localStorage.removeItem("editUserId");
   localStorage.setItem("editUserId", user.id.toString());
   this.router.navigate(['edit-user']);
  };

  addUser():void{
     this.router.navigate(['add-user']);
     

  };


}
