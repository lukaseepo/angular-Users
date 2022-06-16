import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'registration', pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import ('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'registration',
    loadChildren: () => import ('./register/register.module').then(m => m.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
