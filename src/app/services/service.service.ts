import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceService {

  constructor(public http:Http) { 
  	console.log("data service");
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }

}
