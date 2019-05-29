import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {
  page: Object;

  constructor(private route: ActivatedRoute,
    private contentService: ContentService) { }

  ngOnInit() {
    /*const pageData = this.route.snapshot.data['page'];
    this.page = this.contentService.pages[pageData];*/
  }

}
