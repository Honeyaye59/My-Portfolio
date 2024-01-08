import { Component } from '@angular/core';

@Component({
  selector: 'app-project-four',
  templateUrl: './project-four.component.html',
  styleUrls: ['./project-four.component.css']
})
export class ProjectFourComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
