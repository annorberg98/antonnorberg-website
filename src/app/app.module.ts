import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule, MatCardModule, MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './homepage/homepage.component';

import { ContentService } from './shared/services/content.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillslistComponent } from './skillslist/skillslist.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectPageComponent } from './projectpage/projectpage.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    SkillslistComponent,
    SkillComponent,
    ProjectPageComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
