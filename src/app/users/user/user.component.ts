import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {catchError} from "rxjs/operators";
import {User} from "../user.model";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users:any[] = [];
  constructor(private userService: UsersService) {

  }

  ngOnInit(): void {
    this.getUsers();
  }



  getUsers(){
    this.userService.getUsers().subscribe((item:any)=>{
      this.users = item;
      console.log(this.users);
    })
  }

  declineDelete(){
    let blocks = document.querySelectorAll('.block');
    for(let i = 0; i < blocks.length; i++){
      blocks[i].classList.remove('display');
    }
  }

  togglePopUp(){
    let blocks = document.querySelectorAll('.block');
    let deletes = document.querySelectorAll('.delete');
    for(let i = 0; i < deletes.length; i++){
      deletes[i].addEventListener('click', () => {
        blocks[i].classList.add('display');
      })
    }
  }
  deleteUser(id:number){
    this.userService.deleteUsers(id).subscribe((item)=>{
      this.users.forEach((e,i) => {
        if(e.id === id){
          this.users.splice(i, 1);
        }
      })
    })
  }
}
