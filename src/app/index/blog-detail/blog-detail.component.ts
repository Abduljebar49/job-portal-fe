import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { SharedService } from 'src/app/shared/shared.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blog:any;
  constructor(private route:ActivatedRoute,
      private blogService:BlogService,
      private titleService:Title,
      private sharedService:SharedService,
      private meta:Meta
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(par=>{
      this.findArticle(par['key']);
    })
  }

  findArticle(key:string){
    this.blogService.searchArticleWithKey(key).subscribe(res=>{
      if(res!=null){
        this.blog = res;
        this.titleService.setTitle(`
        ${this.blog?.title} ${this.sharedService.blogTitle}
        `)
        this.meta.addTags([
          {
            name:'description',
            content:this.blog.description,
          },
          {
            property:"og:type",
            content:"website"
          },
          {
            property:"og:url",
            content:"base url comes and display here"
          },
          {
            property:"og:title",
            content:`${this.blog.title}`
          },
          {
            property:"og:image",
            content:this.blog.image,
          },
          {
            property:"og:site_name",
            content:this.sharedService.blogTitle,
          }
        ])
    
      }else{
        console.log("not found hence should be redirected")
      }
    })
  }

}
