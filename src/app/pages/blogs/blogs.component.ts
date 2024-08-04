import { Component } from '@angular/core';
import { blogs } from '../../../blogs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  
  myblogs!:any[]
    constructor(){
      this.myblogs = blogs
    }
}
