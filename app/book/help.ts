import { AuthService } from './../auth.service';
// updateData(book:Ibook){
//   const {value} = this.editForm
//   console.log(value);
//   (this.bookObj.id = book.id),
//   (this.bookObj.tittle= value.eTittle),
//   (this.bookObj.author = value.eAuthor),
//   ( this.bookObj.genre = value.eGenre),
//   ( this.bookObj.desc = value.eDesc)
//   this.bookservise.updateBook(book,this.bookObj).then(()=>{
//     alert("edited successfully")
//   })
//   this.editForm.reset()
  
// }
   // set(ref(this.Database, 'user/' + this.newUserForm.controls['username'].value), {
    //   name: this.newUserForm.controls['username'].value,
    //   password: this.newUserForm.controls['password'].value,    
    // });

    // signup(){  
  //   if(this.authService.signin(this.userForm.controls['username'].value,this.userForm.controls['password'].value)){
  //   this.router.navigate(['/book'])
  //   }else{
  //     alert("please enter username and password")
  //   }
  //   alert("register successfully")
  // }





   //  login(): void {
    //    console.log(this.userForm.value);
       
    //   if (this.authService.login(this.userForm.controls['username'].value,this.userForm.controls['password'].value,)) {
    //      this.router.navigate(['/book']);
    //    } else {
    //     alert('Invalid username or password');
    //           }
      //  }



    //   from login 

        // login():void{
    //  console.log("dddr");  
    //  this.BookService.getUser().subscribe((res)=>{
    //   console.log(res);
    //   this.userData=res
    //     this.userData.forEach((each)=>{
    //       if(this.userForm.controls['username'].value === each.name ){
    //       console.log("hyhbguvbhyugytvgh");
    //       this.authService.isLoggedIn= true;
    //       this.router.navigate(['/book']);
    //       }
    //       console.log(each.name);
    //   if(this.authService.signin(each.name,each.password)){
    //   }
    //       })
    //       })
    //  }














    // from AuthService

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