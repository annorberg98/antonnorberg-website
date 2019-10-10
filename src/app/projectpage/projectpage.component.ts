import { Component, OnInit } from '@angular/core';
import { ProjectItem } from './projectitem/projectitem.component';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.scss']
})
export class ProjectpageComponent implements OnInit {

  private projectList = [
    {
      "name": "antonnorberg-website",
      "link": "https://github.com/annorberg98/antonnorberg-website"
    },
    {
      "name": "Angular-currency",
      "link": "https://github.com/annorberg98/Angular-currency"
    }
  ];

  constructor() { }

  ngOnInit() {
    document.getElementById('projects-item').className += ' active';
  }

}
