import { Component } from '@angular/core';
import { Skills, SoftSkills } from 'src/app/interfaces/skills';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
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

  softSkills: SoftSkills[] = [
    {
      name: 'Filosofía Agile',
    },
    {
      name: 'Scrum ',
    },
    {
      name: 'Pair Programming',
    },
    {
      name: 'Peer to peer',
    },
    {
      name: 'Team Programming',
    },
    {
      name: 'Mobile First',
    },
    {
      name: 'Atención al detalle',
    },
    {
      name: 'Organización',
    },
    {
      name: 'Autonomía',
    },
  ];
}
