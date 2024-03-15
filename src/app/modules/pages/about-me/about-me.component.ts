import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  events: any;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.loadEvents();
    });

    this.loadEvents();
  }

  private loadEvents() {
    this.events = [
      {
        status: 'Front-end Developer',
        company: 'Innoway Street S.L.',
        date: this.translate.instant('aboutDate'),
        description: this.translate.instant('aboutDescription'),
        aptitude: 'Angular | Typescript | GIT | Postman | Strapi | Testing',
      },
      {
        status: 'Computer Software Engineering',
        company: '42 Madrid Telefónica',
        date: this.translate.instant('aboutDate2'),
        description: this.translate.instant('aboutDescription2'),
        aptitude: 'Bash | C ',
      },
      {
        status: 'Junior Front-end Developer - Student',
        company: 'Adalab',
        date: this.translate.instant('aboutDate3'),
        description: this.translate.instant('aboutDescription3'),
        aptitude: 'HTML5 | Sass | JavaScript | React | GIT | GitHub',
      },
    ];
  }
}
