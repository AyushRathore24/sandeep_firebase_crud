import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
    const storeduser = localStorage.getItem('user')
      if(storeduser){
        const user = JSON.parse(storeduser)
        this.isLoggedIn = true
        this.isAdmin= user.isAdmin,
        this.isUser = user.isUser,
        this.issubadmin = user.issubadmin,
        this.isNewUser = user.isNewUser

    }
  }
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  isUser :boolean = false
  isNewUser:boolean = false
  issubadmin:boolean=false
 
  ngOnInit(): void {
  }
  // login(username:any, password:any): boolean {
  //   if (username === 'sandeep' && password === 'sandeep'){
  //     this.isLoggedIn = true;
  //     this.isAdmin = true;
  //     this.isUser=false;
  //     return true;
  //    } else if (username === 'san' && password === 'san') {
  //     this.isLoggedIn = true;
  //     this.isAdmin = false;
  //     this.isUser=true;
  //     return true;
  //    }
  //   return false;
  //  }
  
  login(username:any, password:any): boolean {
      if (username === 'sandeep' && password === 'sandeep'){
        this.isLoggedIn = true;
        this.isAdmin = true;
        this.isUser=false;
        this.issubadmin=true
        localStorage.setItem('user',JSON.stringify({ 
        }))
        return true;
       } 
      return false;
     }
   signin(username:string,password:any):boolean{
     if(username !== '' && password !== ''){
       this.isUser = true
       this.isNewUser = true
       this.isLoggedIn = true
       localStorage.setItem('user',JSON.stringify({ 
        isUser:true
      }))
       return true
     }else{
       return false
     }
   }
 
   logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.isUser= false;
    localStorage.removeItem('user')
   }

  }
