import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-firebase-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './firebase-stack.component.html',
  styleUrl: './firebase-stack.component.css'
})
export class FirebaseStackComponent implements OnInit{

  projects:any[] = [];
  myService = inject(BlogService)

  ngOnInit(): void {
    this.projects = this.myService.getProjectByStack('firebase')
    console.log(this.projects)
    console.log("My blogs")
  }
}
