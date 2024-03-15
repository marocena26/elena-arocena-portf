import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';

import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { ProjectsComponent } from './projects.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsComponent, CardProjectComponent],
      imports: [PrimeNgModule, TranslateModule.forRoot()],

    });
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
