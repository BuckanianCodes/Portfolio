import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit{

  projects:any[] = [];
  myService = inject(BlogService)
  ngOnInit(): void {
    const projectIds = [1,4,7];
    this.projects = this.myService.getProjectsByIds(projectIds);
  }
}
