import { Injectable } from '@angular/core';
import { Projects } from '../_models/projects';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


    projects: Projects[] = [
      { id: 0, name: 'Sample Angular Project', summary: 'This is a sample angular project description',description: "", projectLink: "", pictures: ["../../assets/python_project.png","../../assets/python_project.png"],tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
      { id: 1, name: 'Sample Java Project',summary: 'This is a sample java project description',description: "",projectLink: "",pictures: ["../../assets/python_project.png","../../assets/python_project.png"],tags: [Tag.JAVA, Tag.SPRING_BOOT]},
      { id: 2, name: 'Job Prediction Service Application',summary: 'Application for Job predictions and and other crucial information that helps the Jobs Seekers and others to make efficient decisions in the rapidly evolving  job market.',description: "Application to predict Job availability statistics as well as through analysis regarding job availability, job Type, Sponsorship and other crucial information that helps the labor market to make efficient decisions in the rapidly evolving labor market.It is designed using Flask, HTML and Python that give statistics on Job market as well as takes required inputs, process through the model and predicted the results.",projectLink: "https://github.com/AmrutaMishra15/job-prediction-phase3",pictures: ["../../assets/python_project.png","../../assets/company_portal.png","../../assets/student_portal.png","../../assets/stats_screen.png"],tags: [Tag.PYTHON]}
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
  GetProjectbyFilter(filterTags:Tag[]){
    let filteredProjects:Projects[] = [];
    this.projects.forEach(project => {
      let foundAll = true;
      filterTags.forEach(filterTag => {
          if(project.tags.includes(filterTag) == false){
            foundAll = false;
          }
      });
      if(foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
