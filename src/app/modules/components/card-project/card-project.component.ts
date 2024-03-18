import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Project } from 'src/app/interfaces/project';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss'],
})
export class CardProjectComponent implements OnInit {
  allProjects: Project[] = [];

  constructor(
    private translate: TranslateService,
    private themeService: ThemeService
  ) {
    this.translate.onLangChange.subscribe(() => {
      this.loadAllProjects();
    });

    this.loadAllProjects();
  }

  selectedTheme: string = 'dark';

  ngOnInit(): void {
    this.selectedTheme = this.themeService.getTheme();
    this.themeService.themeChanged$.subscribe((theme) => {
      this.selectedTheme = theme;
    });
  }

  private loadAllProjects() {
    this.allProjects = [
      {
        img: 'adventure.jpg',
        name: 'Algebraic profile-cards',
        intro: this.translate.instant('projectsIntro2'),
        description: this.translate.instant('projectsDescription2'),
        url: 'https://marocena26.github.io/algebraic-profile-cards/',
        urlGithub: 'https://github.com/marocena26/algebraic-profile-cards',
        technologies: ['HTML5', 'JavaScript', 'Sass'],
      },
      {
        img: 'country.jpg',
        name: 'Country App',
        intro: this.translate.instant('projectsIntro3'),
        description: this.translate.instant('projectsDescription3'),
        url: 'https://country-app-marocena26.netlify.app/',
        urlGithub: 'https://github.com/marocena26/angular-country-app',
        technologies: ['HTML5', 'TypeScript', 'Angular', 'Bootstrap'],
      },
      {
        img: 'pipes.jpg',
        name: 'Pipe App',
        intro: this.translate.instant('projectsIntro4'),
        description: this.translate.instant('projectsDescription4'),
        url: 'https://pipe-catalogue.netlify.app/',
        urlGithub: 'https://github.com/marocena26/pipes-app',
        technologies: ['HTML5', 'TypeScript', 'Angular', 'Bootstrap'],
      },
      {
        img: 'purrfect-match.jpg',
        name: 'Purrfect Match',
        intro: this.translate.instant('projectsIntro'),
        description: this.translate.instant('projectsDescription'),
        urlGithub: 'https://github.com/marocena26/landing-page',
        url: 'https://landing-purrfect-match.netlify.app/',
        technologies: ['HTML5', 'Sass', 'TypeScript', 'Angular'],
      },
    ];
  }
}
