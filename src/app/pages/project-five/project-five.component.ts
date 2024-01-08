import { Component } from '@angular/core';

@Component({
  selector: 'app-project-five',
  templateUrl: './project-five.component.html',
  styleUrls: ['./project-five.component.css']
})
export class ProjectFiveComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
