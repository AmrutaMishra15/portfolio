import { Injectable } from '@angular/core';
import { Projects } from '../_models/projects';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


    projects: Projects[] = [
      { id: 0, name: 'Sample Angular Project', summary: 'This is a sample angular project description',description: "", projectLink: "", pictures: [],tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
      { id: 1, name: 'Sample Java Project',summary: 'This is a sample java project description',description: "",projectLink: "",pictures: [],tags: [Tag.JAVA, Tag.SPRING_BOOT]},
      { id: 2, name: 'Sample Python Project',summary: 'This is a sample python project description',description: "",projectLink: "",pictures: [],tags: [Tag.PYTHON]}
    ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id:number) : Projects{
    let project = this.projects.find(p => p.id == id);
    if(project === undefined){
      throw new TypeError('There is no project that matched the id: '+id);
    }
    return project;
  }
}
