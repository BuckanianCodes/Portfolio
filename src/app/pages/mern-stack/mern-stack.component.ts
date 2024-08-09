import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-mern-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mern-stack.component.html',
  styleUrl: './mern-stack.component.css'
})
export class MernStackComponent implements OnInit{

  projects:any[] = [];
  myService = inject(BlogService)

  ngOnInit(): void {
    this.projects = this.myService.getProjectByStack('mern')
    console.log(this.projects)
    console.log("My blogs")
  }
}
