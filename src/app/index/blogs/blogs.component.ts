import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  blogs:Blog[] = [
    {
      image:'assets/images/blog/blog4.jpg',
      title:'10 Best Facebook Pages of All Time About Freelancer',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.      
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'Job Skills',
      key:'10-best-facebook-pages-of-all-time-about-freelancer',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog7.jpg',
      title:'The Reason Why Software Developer Repeats As ‘Best Job’',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'Job Skills',
      key:'the-reason-why-software-developer-repeats-as-best-job',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog9.jpg',
      title:'7 Answers to the Most Frequently Asked Questions About Job',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.      
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'News & Update',
      key:'7-answers-to-the-most-frequently-asked-questions-about-job',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog4.jpg',
      title:'10 Best Facebook Pages of All Time About Freelancer',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.      
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'Job Skills',
      key:'10-best-facebook-pages-of-all-time-about-freelancer',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog7.jpg',
      title:'The Reason Why Software Developer Repeats As ‘Best Job’',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'Job Skills',
      key:'the-reason-why-software-developer-repeats-as-best-job',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog9.jpg',
      title:'7 Answers to the Most Frequently Asked Questions About Job',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.      
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'News & Update',
      key:'7-answers-to-the-most-frequently-asked-questions-about-job',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog4.jpg',
      title:'10 Best Facebook Pages of All Time About Freelancer',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.      
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'Job Skills',
      key:'10-best-facebook-pages-of-all-time-about-freelancer',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog7.jpg',
      title:'The Reason Why Software Developer Repeats As ‘Best Job’',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'Job Skills',
      key:'the-reason-why-software-developer-repeats-as-best-job',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog9.jpg',
      title:'7 Answers to the Most Frequently Asked Questions About Job',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.      
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'News & Update',
      key:'7-answers-to-the-most-frequently-asked-questions-about-job',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog4.jpg',
      title:'10 Best Facebook Pages of All Time About Freelancer',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.      
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'Job Skills',
      key:'10-best-facebook-pages-of-all-time-about-freelancer',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog7.jpg',
      title:'The Reason Why Software Developer Repeats As ‘Best Job’',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'Job Skills',
      key:'the-reason-why-software-developer-repeats-as-best-job',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog9.jpg',
      title:'7 Answers to the Most Frequently Asked Questions About Job',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.      
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'News & Update',
      key:'7-answers-to-the-most-frequently-asked-questions-about-job',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog4.jpg',
      title:'10 Best Facebook Pages of All Time About Freelancer',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.      
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'Job Skills',
      key:'10-best-facebook-pages-of-all-time-about-freelancer',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog7.jpg',
      title:'The Reason Why Software Developer Repeats As ‘Best Job’',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'Job Skills',
      key:'the-reason-why-software-developer-repeats-as-best-job',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog9.jpg',
      title:'7 Answers to the Most Frequently Asked Questions About Job',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.      
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'News & Update',
      key:'7-answers-to-the-most-frequently-asked-questions-about-job',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog4.jpg',
      title:'10 Best Facebook Pages of All Time About Freelancer',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.      
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'Job Skills',
      key:'10-best-facebook-pages-of-all-time-about-freelancer',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog7.jpg',
      title:'The Reason Why Software Developer Repeats As ‘Best Job’',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'Job Skills',
      key:'the-reason-why-software-developer-repeats-as-best-job',
      author:'Hien Tran',
    },
    {
      image:'assets/images/blog/blog9.jpg',
      title:'7 Answers to the Most Frequently Asked Questions About Job',
      description:`
      The news comes just after "full stack software developer" was named the
      fastest-growing job of 2018 in a data analysis conducted by another site and
      LinkedIn's annual Emerging Jobs report said blockchain developer is the top
      sought-after position among all occupations in what is becoming an increasingly
      familiar pattern.      
      `,
      date:new Date('Sep 25, 2019'),
      tags:'',
      category:'News & Update',
      key:'7-answers-to-the-most-frequently-asked-questions-about-job',
      author:'Hien Tran',
    }


  ]

}
