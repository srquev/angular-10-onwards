import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: 'user-details',
    component: UserDetailsComponent,
  },
  {
    path: 'cricket',
    component: FirstComponent
  },
  {
    path: 'football',
    component: SecondComponent
  },
  {
    path: '',
    redirectTo: '/user-details',
    pathMatch:'full'
  },
  {
    path: '**',
    component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
