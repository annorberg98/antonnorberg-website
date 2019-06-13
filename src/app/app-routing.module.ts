import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './homepage/homepage.component';
import { ProjectPageComponent } from './projectpage/projectpage.component';
import { PersonalpageComponent } from './personalpage/personalpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomePageComponent, data: {
      page: 'home',
      title: 'Anton Norberg'
    }
  },
  {
    path: 'projects', component: ProjectPageComponent, data: {
      page: 'projects',
      title: 'Anton Norberg | Projects'
    }
  },
  {
    path: 'contact', component: HomePageComponent, data: {
      page: 'contact'
    }
  },
  {
    path: 'personal', component: PersonalpageComponent, data: {
      page: 'personal'
    }
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
