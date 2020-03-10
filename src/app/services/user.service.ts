import { Injectable } from '@angular/core';
import {UserModel} from '../models/User.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Key from '../Key';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  haloooooo() {
    const headers = new HttpHeaders().set('User-Token', AuthenticationService.token.access_token);
    return this.http.get<UserModel>('http://85.160.64.233:3000/user', {headers});
  }
  constructor(private http: HttpClient) { }
}
