import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { CategoriesComponent } from '../categories/categories.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { ExperienceComponent } from "../experience/experience.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent, TechnologiesComponent, CategoriesComponent, BlogsComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
