import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-skillslist',
  templateUrl: './skillslist.component.html',
  styleUrls: ['./skillslist.component.css']
})
export class SkillslistComponent implements OnInit {

  imagePath: string = "/assets/images/"

  programmingImg = [
    'php.svg',
    'python.svg'
  ]
  frontendImg = [
    'html.svg',
    'sass.svg',
    'bootstrap.svg'
  ]


  programming: Object[] = [
    { 'Python': 60 },
    { 'PHP': 60 },
    { 'Java': 15 },
    { 'C#': 5 },
  ];

  frontend: Object[] = [
    { 'HTML': 90 },
    { 'CSS': 80 },
    { 'Javascript ES6': 50 },
    { 'Bootstrap': 90 },
    { 'SASS': 50 }
  ];
  other: Object[] = [
    { 'Databases & SQL': 60 },
    { 'UML': 30 },
    { 'UI/UX': 40 },
    { 'Informaion Architecture': 40 },
    { 'Information Security': 60 },
    { 'Git': 40 },
    { 'Representational State Transfer': 40 },
    { 'Wordpress': 50 }
  ];

  constructor(private content: ContentService) {

  }

  ngOnInit() {
  }


}