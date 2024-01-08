import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectOneComponent } from './pages/project-one/project-one.component';
import { ProjectTwoComponent } from './pages/project-two/project-two.component';
import { ProjectThreeComponent } from './pages/project-three/project-three.component';
import { ProjectFourComponent } from './pages/project-four/project-four.component';
import { ProjectFiveComponent } from './pages/project-five/project-five.component';
import { ProjectSixComponent } from './pages/project-six/project-six.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'project-one', component: ProjectOneComponent},
  {path: 'project-two', component: ProjectTwoComponent},
  {path: 'project-three', component: ProjectThreeComponent},
  {path: 'project-four', component: ProjectFourComponent},
  {path: 'project-five', component: ProjectFiveComponent},
  {path: 'project-six', component: ProjectSixComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
