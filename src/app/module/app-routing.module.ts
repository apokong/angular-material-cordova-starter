import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../component/pages/home/home.component';
import { AboutComponent } from '../component/pages/about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { state: 'home' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { state: 'about' },
  },
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
