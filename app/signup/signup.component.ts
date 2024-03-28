
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Iuser } from '../login/usertype';
import { BookService } from '../book.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  usersData:Iuser[]=[]
  userForm!:FormGroup
  constructor( private authService:AuthService, private router:Router,private bookservice:BookService, public AuthService:AuthService){}
  ngOnInit(): void {
    this.getAllUser()
  this.userForm = new FormGroup({
    name : new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
    email: new FormControl('')
    })
  }
        userObj:Iuser ={
        id:'',
        name:'',
        password:'',
        role:'',
        email:''
        }
  signup(){
    const {value} = this.userForm
    console.log(value);
    this.userObj.id = '',
    this.userObj.name=value.name
    this.userObj.password= value.password
    this.userObj.role = value.role
    this.userObj.email =value.email
    this.bookservice.addUser(this.userObj).then((note)=>{
     if (note){
        alert(" user added sucsessful");
        this.userForm.reset()
     }
    })
    this.usersData.forEach((each)=>{
      console.log(each.role);
      if(this.authService.login(each.name,each.password)){
        this.router.navigate(['/book'])
        alert
        ("welcome")
      }
      
    })
  }
    getAllUser(){
      this.bookservice.getUser().subscribe((res:any)=>{

        this.usersData=res
       })
      }
}
