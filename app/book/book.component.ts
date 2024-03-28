import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ibook } from '../book';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title = 'fire_crud';
  addButton:boolean=true;
  editButton:boolean=false;
  showForm = false
  showBook:boolean=true;
  bookForm!:FormGroup
  editForm!:FormGroup
  booksData :Ibook[]=[]
// note obj ko ek iterface se impoert karenge note.ts se
  bookObj:Ibook ={
  id:'',
  tittle:'',
  author:'',
  genre:'',
  desc:''
  }
  constructor(private bookservise:BookService,public authService:AuthService){}
  ngOnInit(): void {
  this.bookForm= new FormGroup({
    tittle:new FormControl(''),
    author:new FormControl(''),
    genre:new FormControl(''),
    desc:new FormControl(''),
    id:new FormControl(''),
    })
  this.getAllBooks()
  
  }
  insertBook(){
  this.showForm=true;
  this.showBook=false;
  this.addButton=true
  }
  addBook(){
  this.addButton=false
  this.showForm=false;
  this.showBook=true
  const {value} = this.bookForm
  console.log(value);
  this.bookObj.id = value.tittle,
  this.bookObj.tittle=value.tittle
  this.bookObj.author= value.author
  this.bookObj.genre = value.genre
  this.bookObj.desc =value.desc
  this.bookservise.addBook(this.bookObj).then((note)=>{
    if (note){
      alert("sucsessful");
      this.bookForm.reset()
    }
    })
  }
  closeForm(){
  this.showForm=false;
  this.showBook=true
  this.bookForm.reset();
  this.editButton=false
  this.addButton=false
  }
  getAllBooks(){
  this.bookservise.getBook().subscribe((res:any)=>{
    console.log(res);
    this.booksData = res
    console.log(res.id);  
   })
  }
  deleteBook(book:Ibook){
//  note is comming from html where is a method called deletenote we passes note  
  let decision = confirm("wanna delete");
   if(decision==true){
   this.bookservise.deleteBook(book);
   }
  }

  updateData(Book:Ibook){
  const formValue = this.bookForm.patchValue(Book)
   console.log(Book);
   this.showForm=true;
   this.editButton=true
   this.addButton=false;
  
  }
  searchedText:string =''
  onTextChange(value:string){
  this.searchedText=value
  }
  updateBook(){
  this.showForm=false;
  this.showBook=true
  const{value}= this.bookForm;
  (this.bookObj.id = value.id),
  (this.bookObj.tittle=value.tittle),
  (this.bookObj.author= value.author),
  (this.bookObj.genre = value.genre),
  (this.bookObj.desc =value.desc)
   this.bookservise.updateBook(value.id,this.bookObj).then(()=>{
    alert('edited successfully')
   })
  }
   addsubadmin(){
    this.showForm = true
   }
}