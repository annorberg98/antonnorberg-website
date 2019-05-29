import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() title: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

  barWidth(){
    const style = {'width': this.value + "%"};
    return style;
  }

}
