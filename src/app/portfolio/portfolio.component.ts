import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projects } from '../_models/projects';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  projects: Projects[] = [
    { id: 0, name: 'Sample Angular Project', summary: 'This is a sample angular project description',description: "", projectLink: "", pictures: [],tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
    { id: 1, name: 'Sample Java Project',summary: 'This is a sample java project description',description: "",projectLink: "",pictures: [],tags: [Tag.JAVA, Tag.SPRING_BOOT]},
    { id: 2, name: 'Sample Python Project',summary: 'This is a sample python project description',description: "",projectLink: "",pictures: [],tags: [Tag.PYTHON]}
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle("Amruta - portfolio");
  }
}
