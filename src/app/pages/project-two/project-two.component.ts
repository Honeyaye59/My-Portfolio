import { Component } from '@angular/core';

@Component({
  selector: 'app-project-two',
  templateUrl: './project-two.component.html',
  styleUrls: ['./project-two.component.css']
})
export class ProjectTwoComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
