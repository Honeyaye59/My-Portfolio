import { Component } from '@angular/core';

@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.css']
})
export class ProjectOneComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
