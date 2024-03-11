import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Skills, SoftSkills } from 'src/app/interfaces/skills';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  softSkills: SoftSkills[] = [];

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.loadSoftSkills();
    });

    this.loadSoftSkills();
  }

  skills: Skills[] = [
    {
      name: 'HTML5',
    },
    {
      name: 'SASS',
    },
    {
      name: 'BOOTSTRAP',
    },
    {
      name: 'JAVASCRIPT (ES6)',
    },
    {
      name: 'TYPESCRIPT',
    },
    {
      name: 'REACT JS',
    },
    {
      name: 'ANGULAR',
    },
    {
      name: 'GULP',
    },
    {
      name: 'NPM - YARN',
    },
    {
      name: 'GIT',
    },
    {
      name: 'NODE.JS',
    },
    {
      name: 'EXPRESS.JS',
    },
    {
      name: 'GITHUB - GITLAB',
    },
  ];

  private loadSoftSkills() {
    this.softSkills = [
      {
        name: 'Filosofía Agile',
      },
      {
        name: 'Scrum ',
      },
      {
        name: 'Peer to peer',
      },
      {
        name: 'Pair | Team Programming',
      },
      {
        name: 'Mobile First',
      },
      { name: this.translate.instant('skill') },
      { name: this.translate.instant('skill1') },
      { name: this.translate.instant('skill2') },
    ];
  }
}
