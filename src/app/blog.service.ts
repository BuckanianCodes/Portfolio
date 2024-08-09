import { Injectable } from '@angular/core';
import { myprojects } from './myprojects';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  projects = myprojects;


  getProjectByStack(stack:string){
    return this.projects.filter((project) => project.mainTech === stack);
  }
  getProjectsByIds(ids: number[]) {
    return this.projects.filter(project => ids.includes(project.id));
  }
}
