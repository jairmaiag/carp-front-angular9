import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-sim-nao',
  templateUrl: './modal-simnao.component.html',
  styleUrls: ['./modal-simnao.component.css']
})
export class ModalSimnaoComponent implements OnInit {
  modalRef: BsModalRef;

  @Input()
  pergunta: string = 'Digite sua pergunta para sim ou não ?';

  @Output()
  sim = new EventEmitter();

  @Output()
  nao = new EventEmitter();

  @Input()
  icone: string = 'fa-question';

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  simClick(): void {
    this.sim.emit();
    this.modalRef.hide();
  }

  naoClick(): void {
    this.nao.emit();
    this.modalRef.hide();
  }
}
