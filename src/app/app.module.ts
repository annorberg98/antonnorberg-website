import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SkillslistComponent } from './skillslist/skillslist.component';
import { Skill } from './skillslist/skill.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { ProjectItem } from './projectpage/projectitem/projectitem.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    SkillslistComponent,
    Skill,
    ProjectpageComponent,
    ProjectItem
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
