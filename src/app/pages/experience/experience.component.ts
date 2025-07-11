import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  experiences!: any[];
  selectedIndex: number = 1;

  handleClick(index: number) {
    console.log('clicked', index);
    this.selectedIndex = index;
  }
  scrollTo(offset: number): void {
    const content = document.querySelector('.content');
    if (content) {
      content.scrollBy({ top: offset, behavior: 'smooth' });
    }
  }

  goToNext() {
   if(this.selectedIndex < 3) this.selectedIndex++
   }

goToPrevious() {
   if(this.selectedIndex > 1) {
    this.selectedIndex--
  }
}
  ngOnInit() {
    this.experiences = [
      {
        index: 1,
        companyname: 'JackFruit Finance',
        role: 'Website Developer',
        startdate: 'October 2024',
        enddate: 'July 2025',
        employementtype: 'hybrid',
        banner: 'jfwebsite.jpeg',
        websiteUrl:"https://www.jackfruitfinance.com/",
        responsibilities: [
          'Developing and maintaining the company’s e-commerce platform.',
          'Designing the company’s blog site to drive traffic.',
          'Collaborating with third-party software providers to improve and enhance key applications.',
          'Supporting the adoption of new software applications to enhance company’s operations.',
        ],
        techstack: ['Shopify', 'Angular', 'Node.js', 'PostreSQL'],
      },
      {
        index: 2,
        companyname: 'The Feasify',
        role: 'Frontend Developer',
        startdate: 'June 2024',
        enddate: 'September 2024',
        employementtype: 'contract',
        banner: 'feastify.jpeg',
        websiteUrl:"https://thefeastify.com/",
        responsibilities: [
          'Developing and maintaining the company’s e-commerce platform.',
          'Designing the company’s blog site to drive traffic.',
          'Collaborating with third-party software providers to improve and enhance key applications.',
          'Supporting the adoption of new software applications to enhance company’s operations.',
        ],
        techstack: ['React', 'TailwindCSS'],
      },
      {
        index: 3,
        companyname: 'A-List Events',
        role: 'Full Stack Developer',
        startdate: 'Jan 2023',
        enddate: 'Present',
        employementtype: 'part-time',
        banner: 'a-list-banner.jpeg',
        websiteUrl:"https://a-list-events.com/",
        responsibilities: [
          'Provide consultancy services to reach the company’s goals.',
          'Developing an admin dashboard to provide insights, monitor data, and gather user feedback. ',
          'Continuous design of a user interface that allows users to explore, book and pay for events.',
        ],
        techstack: ['Next.js', 'GraphQL', 'Node.js', 'TailwindCSS'],
      },
    ];
  }
}
