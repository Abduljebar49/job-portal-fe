import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  orientation:string = "list";
  constructor() { }

  ngOnInit(): void {
  }


  changeOrientation(type:number){
    if(type==1)
    {
      this.orientation = "list"
    }else{
      this.orientation = "grid"
    }
  }

  jobList:Job[]=[
    {
      label:'Featured',
      iconUrl:"assets/images/companies_logo/logo-100/logo1.jpg",
      type:"Full Time",
      name:"Chief Accountant",
      company:"Shippo Company",
      salary:"$500-$1000/ month",
      openDate:new Date(),
      deadline:new Date(),
      location:"Addis Ababa, Ethiopia",
      description:`
      International collaborative, high-energy
      environmentCompetitive salary and great benefits,
      English training provided About Our Client Our…
      `
    },
    {
      label:'Featured',
      iconUrl:"assets/images/companies_logo/logo-100/logo2.jpg",
      type:"Part Time",
      name:"Senior Data Engineer",
      company:"Radio Game",
      salary:"$500-$1000/ month",
      openDate:new Date(),
      deadline:new Date(),
      location:"Chicago, Illinois",
      description:`
      International collaborative, high-energy
      environmentCompetitive salary and great benefits,
      English training provided About Our Client Our…
      `
    },
    {
      label:'Featured',
      iconUrl:"assets/images/companies_logo/logo-100/logo3.jpg",
      type:"Remote",
      name:"Construction Worker",
      company:"Digital Vine",
      salary:"$500-$1000/ month",
      openDate:new Date(),
      deadline:new Date(),
      location:"Dire Dawa, Ethiopia",
      description:`
      International collaborative, high-energy
      environmentCompetitive salary and great benefits,
      English training provided About Our Client Our…
      `
    },
    {
      label:'Featured',
      iconUrl:"assets/images/companies_logo/logo-100/logo4.jpg",
      type:"Remote",
      name:"Unity Developer",
      company:"Vsmarttech",
      salary:"$500-$1000/ month",
      openDate:new Date(),
      deadline:new Date(),
      location:"Jimma, Ethiopia",
      description:`
      International collaborative, high-energy
      environmentCompetitive salary and great benefits,
      English training provided About Our Client Our…
      `
    },
    {
      label:'Featured',
      iconUrl:"assets/images/companies_logo/logo-100/logo5.jpg",
      type:"Full Time",
      name:"Receptionist",
      company:"Digital Vine",
      salary:"$500-$1000/ month",
      openDate:new Date(),
      deadline:new Date(),
      location:"Hawasa, Ethiopia",
      description:`
      International collaborative, high-energy
      environmentCompetitive salary and great benefits,
      English training provided About Our Client Our…
      `
    },
    {
      label:'Featured',
      iconUrl:"assets/images/companies_logo/logo-100/logo5.jpg",
      type:"Full Time",
      name:"Receptionist",
      company:"Digital Vine",
      salary:"$500-$1000/ month",
      openDate:new Date(),
      deadline:new Date(),
      location:"Hawasa, Ethiopia",
      description:`
      International collaborative, high-energy
      environmentCompetitive salary and great benefits,
      English training provided About Our Client Our…
      `
    },
    {
      label:'Featured',
      iconUrl:"assets/images/companies_logo/logo-100/logo1.jpg",
      type:"Full Time",
      name:"Chief Accountant",
      company:"Shippo Company",
      salary:"$500-$1000/ month",
      openDate:new Date(),
      deadline:new Date(),
      location:"Addis Ababa, Ethiopia",
      description:`
      International collaborative, high-energy
      environmentCompetitive salary and great benefits,
      English training provided About Our Client Our…
      `

    },
    {
      label:'Featured',
      iconUrl:"assets/images/companies_logo/logo-100/logo2.jpg",
      type:"Part Time",
      name:"Senior Data Engineer",
      company:"Radio Game",
      salary:"$500-$1000/ month",
      openDate:new Date(),
      deadline:new Date(),
      location:"Chicago, Illinois",
      description:`
      International collaborative, high-energy
      environmentCompetitive salary and great benefits,
      English training provided About Our Client Our…
      `
    },
    {
      label:'Featured',
      iconUrl:"assets/images/companies_logo/logo-100/logo3.jpg",
      type:"Remote",
      name:"Construction Worker",
      company:"Digital Vine",
      salary:"$500-$1000/ month",
      openDate:new Date(),
      deadline:new Date(),
      location:"Dire Dawa, Ethiopia",
      description:`
      International collaborative, high-energy
      environmentCompetitive salary and great benefits,
      English training provided About Our Client Our…
      `
    },
    {
      label:'Featured',
      iconUrl:"assets/images/companies_logo/logo-100/logo4.jpg",
      type:"Remote",
      name:"Unity Developer",
      company:"Vsmarttech",
      salary:"$500-$1000/ month",
      openDate:new Date(),
      deadline:new Date(),
      location:"Jimma, Ethiopia",
      description:`
      International collaborative, high-energy
      environmentCompetitive salary and great benefits,
      English training provided About Our Client Our…
      `
    },
    {
      label:'Featured',
      iconUrl:"assets/images/companies_logo/logo-100/logo5.jpg",
      type:"Full Time",
      name:"Receptionist",
      company:"Digital Vine",
      salary:"$500-$1000/ month",
      openDate:new Date(),
      deadline:new Date(),
      location:"Hawasa, Ethiopia",
      description:`
      International collaborative, high-energy
      environmentCompetitive salary and great benefits,
      English training provided About Our Client Our…
      `

    },
    {
      label:'Featured',
      iconUrl:"assets/images/companies_logo/logo-100/logo5.jpg",
      type:"Full Time",
      name:"Receptionist",
      company:"Digital Vine",
      salary:"$500-$1000/ month",
      openDate:new Date(),
      deadline:new Date(),
      location:"Hawasa, Ethiopia",
      description:`
      International collaborative, high-energy
      environmentCompetitive salary and great benefits,
      English training provided About Our Client Our…      `
    },

  ]

}
