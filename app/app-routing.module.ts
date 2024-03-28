import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookComponent } from './book/book.component';
import { AuthGuard } from './auth.guard';
import { CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';

const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'signup',component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'subadmin',component:SubAdminComponent},
  {path:'book',component:BookComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
