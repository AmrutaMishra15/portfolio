import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Projects } from '../_models/projects';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects = {} as Projects[];
  isCollapse:boolean = true;
  typeScript:boolean = false;
  python:boolean = false;
  filtering:boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Amruta - portfolio");
  }
  ngOnInit(): void {
   this.projects = this.projectService.GetProjects();
  }
  Filter(){
    let filterTags: Tag[] = [];
    if(this.typeScript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.python){
      filterTags.push(Tag.PYTHON);
    }
    if(this.typeScript || this.python){
      this.filtering = true;
    }
    this.projects = this.projectService.GetProjectbyFilter(filterTags);
  }
  ResetFilter(){
    this.typeScript = false;
    this.python = false;
    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }
}
