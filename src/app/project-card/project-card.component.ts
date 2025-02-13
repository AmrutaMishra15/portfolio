import { Component, Input } from '@angular/core';
import { Projects } from '../_models/projects';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project = {} as Projects;
  bsModalRef? : BsModalRef;
  constructor(private modalService: BsModalService){

  }

  OpenProjectModal(){
    const modalOption : ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project 
      }
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent,modalOption);
  }

}
