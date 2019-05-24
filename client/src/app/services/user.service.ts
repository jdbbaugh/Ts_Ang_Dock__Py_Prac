import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';
import { Observable } from 'rxjs';
import * as cors from "cors";



const httpOptions = {
  headers: new HttpHeaders({
    'allowedHeaders': ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    'Content-type': 'application/json',
    'credentials': 'true',
    'methods': "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    'origin': 'API_URL',
    'preflightContinue': 'false'
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
