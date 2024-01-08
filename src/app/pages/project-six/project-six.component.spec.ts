import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSixComponent } from './project-six.component';

describe('ProjectSixComponent', () => {
  let component: ProjectSixComponent;
  let fixture: ComponentFixture<ProjectSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
