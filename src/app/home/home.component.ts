import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  aboutMe:string = "I am a Full Stack Developer with 5 years of experience in web application development, specializing in both backend and frontend development, building scalable web applications using Java, Spring Boot, Angular, React, and cloud technologies. I design and optimize microservices, enhance data-driven solutions, and improve user engagement. I have led high-impact projects in financial and automotive tech, driving efficiency and innovation. I thrive on problem-solving, UI/UX enhancements, and delivering robust software solutions."
  constructor(private titleService: Title) {
    this.titleService.setTitle("Amruta - Home");

  }


}
