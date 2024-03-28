import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
// import { AngularFireModule} from '@angular/fire/compat';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, FirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignupComponent,
    LoginComponent,
    BookComponent,
    SearchComponent,
    HomeComponent,
    SubAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
