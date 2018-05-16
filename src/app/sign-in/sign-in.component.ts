import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  allEmployees: any[];
  user: any;
  signInMessage: any;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  signIn() {
    const self = this;
    // get the username and passwird values from html
    var user = <HTMLInputElement>document.getElementById('username');
    var username = user.value;
    var pass = <HTMLInputElement>document.getElementById('password');
    var password = pass.value;
    // send them to service
    self.userService.signIn(username, password).subscribe(function (res: any) {
      if (res.status == 200) {
        console.log('user is successfully signed in and he is ' + res.data);
        self.user = res.data;
        self.signInMessage = 'signed in successfully';
      }
      else {
        self.signInMessage = res.err;
        console.log('front end error is ' + res.err);
      }
    });
  };
  getAllEmployees() {
    let self = this;
    // send to service that user want to get all employees
    self.userService.getAllEmployees().subscribe(function (res: any) {
      console.log(res.data);

    })
  }

}
