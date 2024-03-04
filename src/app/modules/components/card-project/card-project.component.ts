import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {
  public allProjects: Project[] = [
    {
      img: 'anonymous.jpeg',
      name: 'Anonymous proxy',
      intro: 'Maquetación de un proyecto web según diseño. ',
      description:
        'Layout secillo para mostrar como quedaría un hipotético diseño pedido por el cliente utilizando una estructura correcta de HTML y Sass.',
      urlGithub: 'https://github.com/marocena26/anonymous-proxy',
      url: 'https://marocena26.github.io/anonymous-proxy/',
      technologies: ['HTML5', 'Sass', 'Zepling'],
      info: 'anonymous',
    },
    {
      img: 'adventure.jpg',
      name: 'Algebraic profile-cards',
      intro:
        'Aplicación web de Generador de tarjetas personales, proyecto colaborativo. ',
      description:
        'Esta web desarrollada con JavaScript nos permite generar tarjetas de visita en las que podremos incluir datos como el nombre, teléfono, correo electrónico, LinkedIn y GitHub. A su vez podremos elegir entre distintas paletas de color y compartirla en Twitter.',
      url: 'https://marocena26.github.io/algebraic-profile-cards/',
      urlGithub: 'https://github.com/marocena26/algebraic-profile-cards',
      info: 'algebraic-profile-cards',
      technologies: ['HTML5', 'JavaScript', 'Sass'],
    },
    {
      img: 'country.jpg',
      name: 'Country App',
      intro: 'Aplicación web para obtener informacón sobre paises del mundo. ',
      description:
        'El usuario utilizará una barra de búsqueda para poder ver en pantalla la información técnica de un país buscandólo por región, capital o país. Créditos: Udemy',
      url: 'https://country-app-marocena26.netlify.app/countries/by-capital',
      urlGithub: 'https://github.com/marocena26/angular-country-app',
      info: 'country-app',
      technologies: ['HTML5', 'TypeScript', 'Angular', 'Bootstrap'],
    },
    {
      img: 'pipes.jpg',
      name: 'Pipe App',
      intro: 'Aplicación web para consultar informacón sobre Pipes de Angular.',
      description:
        'El usuario podrá utilizar el menú de navegación para poder consultar la información técnica de los distintos tipos de Pipes que existen en Angular y algunos propios con ejemplos de su funcionamiento. Créditos: Udemy',
      url: 'https://pipe-catalogue.netlify.app/',
      urlGithub: 'https://github.com/marocena26/pipes-app',
      info: 'gifs-app',
      technologies: ['HTML5', 'TypeScript', 'Angular', 'Bootstrap'],
    },
  ];
}
