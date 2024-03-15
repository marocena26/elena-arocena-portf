import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

import { AboutMeComponent } from '../about-me/about-me.component';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutMeComponent,
        CardProjectComponent,
        HomeComponent,
        ProjectsComponent,
        SkillsComponent,
      ],
      imports: [PrimeNgModule, TranslateModule.forRoot()],

    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // =============== TEST FOR onClicLinkedin ===============


  it('should call downloadPDF with correct parameters when onClicPDF is called', () => {
    const downloadPDFSpy = spyOn(component, 'downloadPDF');

    component.onClicPDF();

    expect(downloadPDFSpy).toHaveBeenCalledWith("../../../../assets/elena-arocena-cv.pdf", "cv_elena_arocena.pdf");
  });

  // =============== TEST FOR onClicLinkedin ===============

  it('should open LinkedIn profile in new window', () => {
    spyOn(window, 'open');
    component.onClicLinkedin();
    expect(window.open).toHaveBeenCalledWith('https://www.linkedin.com/in/maria-elena-arocena-lopez-/', '_blank');
  });


});
