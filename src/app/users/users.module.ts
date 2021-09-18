import { NgModule } from '@angular/core';
import { UserComponent } from "./user/user.component";
import {UsersRoutingModule} from "./users-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    UsersRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class  UsersModule { }
