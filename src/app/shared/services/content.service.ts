import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  /*name: "Anton Norberg";
  email: "me@antonnorberg.se";
  location: "Malmö, Sweden";*/

  /*education: Object = {
    'gymnasie': "Thoren Innovation School (2014-2017) El -och Energi: Data -och Kommunikation",
    'universitet': "Malmö University (2017-) Information Architecture"
  };*/

  public programming: Object[] = [
  ];

  public frontend: Object[] = [
  ];

  public other: Object[] = [
  ];


  private colors: ["primary", "success", "info", "warning", "danger", "dark", "secondary"];

  pages: Object = {
    'home': { title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/bg00.jpg' },
    'about': { title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/bg01.jpg' },
    'contact': { title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/bg02.jpg' }
  };

  constructor() {


  }
}
