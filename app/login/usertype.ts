export interface Iuser{
        id:string
        name:string,
        password:string,
        role:string,
        email:string
}
/*
else if(this.userForm.controls['username'].value === eachUser.name &&  this.userForm.controls['password'].value === eachUser.password && this.user === eachUser.role){
        this.authService.isLoggedIn=true 
        this.authService.isUser= true
        console.log(eachUser);  
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
      else{
        this.error = "INVALID USERNAME AND PASSWORD"
  
      }