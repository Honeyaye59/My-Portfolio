import { Component } from '@angular/core';

@Component({
  selector: 'app-project-six',
  templateUrl: './project-six.component.html',
  styleUrls: ['./project-six.component.css']
})
export class ProjectSixComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
