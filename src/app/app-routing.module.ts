import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  { path:'', redirectTo:'dashboard',pathMatch:'full' },
  { path:'about', component: AboutComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'contacts', component: ContactsComponent},
  { path:'faq', component: FaqComponent},

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
