import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[],children:[
    
  ]},
  {path:'', component:LoginComponent},
  {path:'**',component:PagenotfoundComponent},
  {path:'create-student',component:CreateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
