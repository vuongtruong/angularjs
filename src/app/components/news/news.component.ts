import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  posts: Posts[];

  constructor(private serviceService: ServiceService) { 
  
  }

  ngOnInit() {
    this.serviceService.getPosts().subscribe((posts)=>{
      this.posts = posts;

    });
  }
  

}
interface Posts{
  	id:number,
  	title:string,
  	body:string,
  	userId:number,
  }
