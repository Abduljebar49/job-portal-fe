import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Blog } from 'src/app/models/blog.model';
import { SharedService } from 'src/app/shared/shared.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = []
  constructor(
    private blogService: BlogService, 
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  async ngOnInit(): Promise<void> {
    this.titleService.setTitle(`
    Blogs - ${this.sharedService.blogTitle}
    `)
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe((blogs) => this.blogs = blogs);
  }

}
