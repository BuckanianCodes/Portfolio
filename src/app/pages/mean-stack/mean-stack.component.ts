import { Component, inject, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mean-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mean-stack.component.html',
  styleUrl: './mean-stack.component.css'
})
export class MeanStackComponent implements OnInit{

  projects:any[] = [];
  myService = inject(BlogService)

  ngOnInit(): void {
    this.projects = this.myService.getProjectByStack('mean')
    console.log(this.projects)
    console.log("My blogs")
  }
}
