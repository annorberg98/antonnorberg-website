import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.css']
})
export class ProjectPageComponent implements OnInit {
  title = 'Projects';

  page: Object;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
