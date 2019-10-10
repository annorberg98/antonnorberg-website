import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  page: Object;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*const pageData = this.route.snapshot.data['page'];
    this.page = this.contentService.pages[pageData];*/
    document.getElementById('home-item').className += ' active';
  }

}
