import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Ibook } from './book';
import { BookService } from './book.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fire_crud';
  signUpButton=  true;

  constructor(public authService:AuthService, private router:Router){}
  ngOnInit(): void {
    if(this.authService.isLoggedIn){
    this.signUpButton =false
    }
  }
 
logout(): void {
  this.authService.logout();
  // Redirect to login page or any other desired route
  // For example:
  this.router.navigate(['/login']);
}
redirect(){
  this.router.navigate(['/signup'])
}
addBook(){

}
}


