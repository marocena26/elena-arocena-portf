import { Component } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  events: any[];

  constructor() {
    this.events = [
      {
        status: 'Front-end Developer',
        company: 'Innoway Street S.L.',
        date: 'Abril 2023 | Actualmente',
        description:
          'Desarrolladora Web. Mantenimiento y desarrollo de diversos proyectos del ámbito de la economia circular junto a un equipo de desarrolladores expertos en diferentes sectores.',
        aptitude: 'Angular | Typescript | GIT | Postman | Strapi | Testing',

      },
      {
        status: 'Computer Software Engineering',
        company: '42 Madrid Telefónica',
        date: 'Feb 2023 | Mar 2023',
        description:
          'Piscina 42 (seleccionada). 26 días de trabajo consecutivos regidos por la metodología 42. Proyectos diarios centrados en obtener una base sólida en lenguaje C a través del peer to peer y el auto-aprendizaje.',
        aptitude: 'Formación técnica: Bash | C ',
      },
      {
        status: 'Junior Front-end Developer - Student',
        company: 'Adalab',
        date: 'Sep 2022 | Ene 2023',
        description:
          'Bootcamp de Programación Web orientado al desarrollo de páginas web/mobile utilizando lenguajes de programación como HTML, CSS3 o JavaScript junto a otras herramientas de programación.',
        aptitude:
          'Formación técnica: HTML5 | Sass | JavaScript | React | GIT | GitHub',
      },
    ];
  }
}
