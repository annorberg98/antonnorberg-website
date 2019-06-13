import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation,
  ]

})
export class AppComponent {
  title = 'Anton Norberg';

  constructor(private titleService: Title) {
    this.setTitle(this.title);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
