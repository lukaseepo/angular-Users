import { NgModule } from '@angular/core';
import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterComponent } from './register/register.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RegisterRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class RegisterModule { }
