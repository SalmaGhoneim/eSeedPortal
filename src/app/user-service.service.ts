import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class UserServiceService {
  baseUrl: 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {
  }
  signIn(username, password) {
  // send username and password to backend
    return this.http.patch('http://localhost:3000/api/signIn/', {username: username, password: password});
  }
  getAllEmployees() {
    // send a get request to backend
    return this.http.get('http://localhost:3000/api/getAllEmployees/');
  }

}
