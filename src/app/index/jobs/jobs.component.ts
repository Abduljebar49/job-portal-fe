import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Job } from 'src/app/models/job.model';
import { SharedService } from 'src/app/shared/shared.service';
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  orientation: string = "list";
  jobList:Job[] | undefined;
  constructor(private titleService: Title,
    private sharedService: SharedService,
    private jobService:JobService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`
    Jobs - ${this.sharedService.blogTitle}
    `)
    this.jobService.getJobs().subscribe(res=>this.jobList = res);
  }


  changeOrientation(type: number) {
    if (type == 1) {
      this.orientation = "list"
    } else {
      this.orientation = "grid"
    }
  }



}
