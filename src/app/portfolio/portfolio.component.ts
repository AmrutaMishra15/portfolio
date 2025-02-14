import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Projects } from '../_models/projects';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects = {} as Projects[];
  isCollapse:boolean = true;
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Amruta - portfolio");
  }
  ngOnInit(): void {
   this.projects = this.projectService.GetProjects();
  }
}
