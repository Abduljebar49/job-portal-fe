import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobsComponent } from './jobs/jobs.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'jobs',
        component:JobsComponent
      },
      {
        path:'job/detail',
        component:JobDetailComponent
      },
      {
        path:'blogs',
        component:BlogsComponent,
      },
      {
        path:'blogs/detail',
        component:BlogDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
