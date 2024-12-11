import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit{
  experiences!:any[]

  ngOnInit(){
    this.experiences = [
      {
        companyname:"The Feasify",
        startdate:"01/07/2024",
        enddate:"30/08/2024",
        employementtype:"contract",
        link:"",
        websiteurl:""
      },
      {
        companyname:"JackFruit Finance",
        startdate:"01/09/2024",
        enddate:"present",
        employementtype:"hybrid",
        link:"",
        websiteurl:""
      }
    ]
  }

}
