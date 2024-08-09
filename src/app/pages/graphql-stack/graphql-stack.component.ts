import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-graphql-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graphql-stack.component.html',
  styleUrl: './graphql-stack.component.css'
})
export class GraphqlStackComponent  implements OnInit{

  projects:any[] = [];
  myService = inject(BlogService)

  ngOnInit(): void {
    this.projects = this.myService.getProjectByStack('graphql')
    console.log(this.projects)
    console.log("My blogs")
  }
}
