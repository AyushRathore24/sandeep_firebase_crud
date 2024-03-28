import { Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iuser } from '../login/usertype';

@Component({
  selector: 'app-sub-admin',
  templateUrl: './sub-admin.component.html',
  styleUrls: ['./sub-admin.component.css']
})
export class SubAdminComponent implements OnInit {
  userForm!:FormGroup
  constructor(private fb: FormBuilder, private bookService :BookService,private router:Router) { }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required,]],
      role: ['user', Validators.required] // Default to 'user'
    });
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
this.router.navigate(['/book'])
this.bookService.addUser(this.userObj).then((note)=>{
 if (note){
    alert(" user added sucsessful");
    this.userForm.reset()
 }
})

}

}
