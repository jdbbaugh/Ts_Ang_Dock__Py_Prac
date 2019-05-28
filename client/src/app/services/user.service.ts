import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';
import { Observable } from 'rxjs';
import * as cors from "cors";



const httpOptions = {
  headers: new HttpHeaders({

    'Content-type': 'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl:string = 'http://localhost/api/users';


  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}`);
  }
}
