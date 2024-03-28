import { Injectable } from '@angular/core';
import { collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Ibook } from './book';
import{addDoc,collectionData,doc,Firestore,updateDoc,deleteDoc} from '@angular/fire/firestore'
import { Iuser } from './login/usertype';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private fs:Firestore) { }
  addBook(book:Ibook){
    return addDoc(collection(this.fs,'Books'),book)
  }
  /**
   *
   * @return {*}  {Observable<Ibook>}
   * @memberof BookService
   */
  getBook():Observable<Ibook>{
    let noteref = collection(this.fs,'Books')
    return collectionData(noteref,{idField:'id'}) as Observable<any> 
    
  }
  deleteBook(book:Ibook){
    let docRef = doc(this.fs,`Books/${book.id}`)
    return deleteDoc(docRef)
  }
  updateBook(book:Ibook,notes:any){
    let docref = doc(this.fs, `Books/${book}`)
    return updateDoc(docref,notes)
  }
  addUser(user:Iuser){
    return addDoc(collection(this.fs,'Users'),user)  
  }
  getUser():Observable<any>{
    let noteref = collection(this.fs,'Users')
    return collectionData(noteref,{idField:'id'}) as Observable<any> 
    
  }
}

