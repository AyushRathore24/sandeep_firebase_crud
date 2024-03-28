import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData:any[]=[]
  userForm!:FormGroup
  isLoggedIn:boolean=false
  constructor(public authService: AuthService, private router: Router,private BookService:BookService) {
    const storeduser = localStorage.getItem('user')
    if(storeduser){
      const user = JSON.parse(storeduser)
      this.authService.isLoggedIn = true
      this.authService.isAdmin= user.isAdmin,
      this.authService.isUser = user.isUser,
      this.authService.issubadmin = user.issubadmin,
      this.authService.isNewUser = user.isNewUser
    }
  }
    ngOnInit(): void {
     this.userForm = new FormGroup({
     username : new FormControl(''),
     password: new FormControl('')
     })
    }
    login(){
      this.BookService.getUser().subscribe((res)=>{
        console.log(res);
        this.userData=res
        this.userData.forEach((eachUser)=>{
          if(this.userForm.controls['username'].value === eachUser.name &&  this.userForm.controls['password'].value === eachUser.password){
            this.authService.isLoggedIn=true
            this.router.navigate(['book'])
            localStorage.setItem('user',JSON.stringify({
             isLoggedIn:true,
             isUser:true,
            }))

          }
          else if (this.authService.login(this.userForm.controls['username'].value ,this.userForm.controls['password'].value)){
            console.log("logged in as addmin");
            this.authService.isLoggedIn=true
            this.router.navigate(['book'])
            localStorage.setItem('user',JSON.stringify({
              isLoggedIn:true,
              isAdmin:true,
             }))
          }
        }) 
      })
    }



    redirect(){
     this.authService.isLoggedIn=false
     this.router.navigate(['/signup'])
     localStorage.removeItem('user')
    }
      
}



