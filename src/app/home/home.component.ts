import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Projects } from '../_models/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aboutMe:string = "I am a Full Stack Developer with 5 years of experience in web application development, specializing in both backend and frontend development, building scalable web applications using Java, Spring Boot, Angular, React, and cloud technologies. I design and optimize microservices, enhance data-driven solutions, and improve user engagement. I have led high-impact projects in financial and automotive tech, driving efficiency and innovation. I thrive on problem-solving, UI/UX enhancements, and delivering robust software solutions."
  
  featureProject = {} as Projects;
  constructor(private titleService: Title, private proejctService: ProjectsService) {
    this.titleService.setTitle("Amruta - Home");

  }
  ngOnInit(): void {
   this.featureProject = this.proejctService.GetProjectById(2);
  }


}
