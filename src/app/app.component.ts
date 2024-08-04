import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { BlogsComponent } from "./pages/blogs/blogs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, TechnologiesComponent, CategoriesComponent, BlogsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
