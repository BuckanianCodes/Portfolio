import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit{
  experiences!:any[]
  selectedIndex:number = 0;

  handleClick(index:number){
    console.log("clicked",index)
   this.selectedIndex = index
  }
   scrollTo(offset:number):void{
     const content = document.querySelector('.content');
     if(content){
      content.scrollBy({top:offset,behavior:'smooth'})
     } 
    }
  ngOnInit(){

   

    this.experiences = [
      {
        companyname:"JackFruit Finance",
        role:"Website Developer",
        startdate:"October 2024",
        enddate:"July 2025",
        employementtype:"hybrid",
        banner:"jfwebsite.jpeg",
        responsibilities:[
          "Developing and maintaining the company’s e-commerce platform.",
          "Designing the company’s blog site to drive traffic.",
          "Collaborating with third-party software providers to improve and enhance key applications.",
          "Supporting the adoption of new software applications to enhance company’s operations."
        ],
        techstack:[
          "Shopify",
          "Angular",
          "Node.js",
          "PostreSQL",
        ]
      },
      {
        companyname:"The Feasify",
        role:"Frontend Developer",
        startdate:"June 2024",
        enddate:"September 2024",
        employementtype:"contract",
        banner:"jfwebsite.jpeg",
        responsibilities:[
          "Developing and maintaining the company’s e-commerce platform.",
          "Designing the company’s blog site to drive traffic.",
          "Collaborating with third-party software providers to improve and enhance key applications.",
          "Supporting the adoption of new software applications to enhance company’s operations."
        ],
        techstack:[
          "React",
          "TailwindCSS"
        ]
      },
      {
        companyname:"A-List Events",
        startdate:"Jan 2023",
        enddate:"Present",
        employementtype:"part-time",
        banner:"a-list-banner.jpeg",
        responsibilities:[
          "Provide consultancy services to reach the company’s goals.",
          "Developing an admin dashboard to provide insights, monitor data, and gather user feedback. ",
          "Continuous design of a user interface that allows users to explore, book and pay for events."
        ],
        techstack:[
          "Next.js",
          "GraphQL",
          "Node.js",
          "TailwindCSS",
        ]
      },
    ]

  }

}
