import { Component } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  events: any[];

  constructor() {
    this.events = [
      {
        status: 'Front-end Developer',
        company: 'Innoway Street S.L.',
        date: 'Abril 2023 | Actualmente',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa error, aperiam molestiae quisquam explicabo excepturi repellendus dolorem iste soluta mollitia, et, ratione nihil eos similique illo qui rem facere accusamus?',
      },
      {
        status: 'Computer Software Engineering',
        company: '42 Madrid Telefónica',
        date: 'Feb 2023 | Mar 2023',
        description: 'Desafío de 26 días consecutivos regido por la metodología 42. Durante este periodo se realizan proyectos diarios que brindan la oportunidad de obtener una base sólida en lenguaje C a través del peer to peer y el autoaprendizaje. Programación 7 días a la semana, día y noche, junto a muchas otras personas en idéntica situación de incertidumbre.',
        aptitude: 'Formación técnica: Bash | C '
      },
      {
        status: 'Junior Front-end Developer - Student',
        company: 'Adalab',
        date: 'Sep 2022 | Ene 2023',
        description: 'Bootcamp de Programación Web enfocado en el aprendizaje para crear páginas y aplicaciones web utilizando lenguajes de programación como HTML, CSS3 o JavaScript y otras herramientas de programación. ',
        aptitude: 'Formación técnica: HTML5 | Sass | JavaScript | React | Git | GitHub'
      },
    ];
  }
}
