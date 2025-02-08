import { Component, Input } from '@angular/core';
import { Projects } from '../_models/projects';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = {} as Projects;

}
