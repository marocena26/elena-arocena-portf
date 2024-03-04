import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss'],
})
export class CardProjectComponent {
  public allProjects: Project[] = [
    {
      img: 'anonymous.jpeg',
      name: 'Anonymous proxy',
      intro: 'Maquetación de un proyecto web según diseño. ',
      description:
        'Template de una landing secilla apta para editar y desarrollar futuros proyectos. Creado desde un diseño dado por Adalab con HTML5 y Sass.',
      urlGithub: 'https://github.com/marocena26/anonymous-proxy',
      url: 'https://marocena26.github.io/anonymous-proxy/',
      technologies: ['HTML5', 'Sass', 'Zepling'],
    },
    {
      img: 'adventure.jpg',
      name: 'Algebraic profile-cards',
      intro: 'Aplicación web de Generador de tarjetas personales. ',
      description:
        'Web interactiva diseñada para generar tarjetas de visita personalizadas y que puedan ser compartidas en Twitter. Proyecto colaborativo creado desde cero con HTML5, JavaScript y Sass',
      url: 'https://marocena26.github.io/algebraic-profile-cards/',
      urlGithub: 'https://github.com/marocena26/algebraic-profile-cards',
      technologies: ['HTML5', 'JavaScript', 'Sass'],
    },
    {
      img: 'country.jpg',
      name: 'Country App',
      intro: 'Aplicación web de Geografía. ',
      description:
        'Web diseñada para consultar información técnica de un país en concreto. Creado desde un diseño dado por Fernando Herrera (Udemy) con Angular y Bootstrap.',
      url: 'https://country-app-marocena26.netlify.app/',
      urlGithub: 'https://github.com/marocena26/angular-country-app',
      technologies: ['HTML5', 'TypeScript', 'Angular', 'Bootstrap'],
    },
    {
      img: 'pipes.jpg',
      name: 'Pipe App',
      intro: 'Aplicación web Pipes de Angular.',
      description:
        'Web diseñada para consultar información técnica de los distintos tipos de Pipes que existen en Angular con algunos ejemplos de su funcionamiento. Creado desde un diseño dado por Fernando Herrera (Udemy) con Angular y Bootstrap.',
      url: 'https://pipe-catalogue.netlify.app/',
      urlGithub: 'https://github.com/marocena26/pipes-app',
      technologies: ['HTML5', 'TypeScript', 'Angular', 'Bootstrap'],
    },
  ];
}
