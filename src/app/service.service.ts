import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';



@Injectable()
export class githubservice {
  username: string;

  constructor(private http: HttpClient) {
    console.log('github service Ready...');
    this.username = 'ephraim-kamau54';

  }
  getUser() {
    return this.http.get('https://api.github.com/users/' + this.username);

  }
  getRepos() {
    return this.http.get(' https://api.github.com/users/' + this.username + '/repos');
  }
  updateUser(username: string) {
    this.username = username;
  }
}