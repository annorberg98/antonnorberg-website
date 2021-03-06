import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ProjectpageComponent } from './projectpage/projectpage.component';
//import { PersonalpageComponent } from './personalpage/personalpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomepageComponent, data: {
      page: 'home',
      title: 'Anton Norberg'
    }
  },
   {
     path: 'projects', component: ProjectpageComponent, data: {
       page: 'projects',
       title: 'Anton Norberg | Projects'
     }
   },
  {
    path: 'contact', component: HomepageComponent, data: {
      page: 'contact'
    }
  },
  /*{
    path: 'personal', component: PersonalpageComponent, data: {
      page: 'personal'
    }
  },*/
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
