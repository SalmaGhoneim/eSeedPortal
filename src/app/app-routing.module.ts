
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
const routes = [
    {
        path: '',
        component: SignInComponent   
    }
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [
      RouterModule
    ]
  })
  
  export class AppRoutingModule { }
  