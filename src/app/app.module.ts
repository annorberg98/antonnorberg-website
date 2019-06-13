import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { MatButtonModule, MatCardModule, MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './homepage/homepage.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SkillslistComponent } from './skillslist/skillslist.component';
import { Skill } from './skillslist/skill.component';
import { ProjectPageComponent } from './projectpage/projectpage.component';
import { ProjectComponent } from './project/project.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    SkillslistComponent,
    Skill,
    ProjectPageComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    /*MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
