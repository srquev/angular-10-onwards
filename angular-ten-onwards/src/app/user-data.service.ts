import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { 

    /** get user data */
  }
// https://jsonplaceholder.typicode.com/posts

  getUserData(){
      return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
