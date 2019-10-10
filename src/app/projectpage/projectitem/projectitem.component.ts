import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projectitem',
  styleUrls: ['./projectitem.component.scss'],
  templateUrl: './projectitem.component.html'
})
export class ProjectItem implements OnInit {

  @Input() title: string;
  @Input() value: string;
  @Input() gitlink: string;

  constructor() { }

  ngOnInit() {

  }

}
