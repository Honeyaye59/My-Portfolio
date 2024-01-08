import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { IntroComponent } from './pages/home/intro/intro.component';
import { AboutComponent } from './pages/home/about/about.component';
import { ProjectsComponent } from './pages/home/projects/projects.component';
import { SkillsComponent } from './pages/home/skills/skills.component';
import { BlogComponent } from './pages/home/blog/blog.component';
import { ProjectOneComponent } from './pages/project-one/project-one.component';
import { ProjectTwoComponent } from './pages/project-two/project-two.component';
import { ProjectThreeComponent } from './pages/project-three/project-three.component';
import { ProjectFourComponent } from './pages/project-four/project-four.component';
import { ProjectFiveComponent } from './pages/project-five/project-five.component';
import { ProjectSixComponent } from './pages/project-six/project-six.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    IntroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    BlogComponent,
    ProjectOneComponent,
    ProjectTwoComponent,
    ProjectThreeComponent,
    ProjectFourComponent,
    ProjectFiveComponent,
    ProjectSixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
