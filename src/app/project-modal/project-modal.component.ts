import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Projects } from '../_models/projects';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {

  project = {} as Projects;
  constructor(public bsModalref: BsModalRef){

  }

}
