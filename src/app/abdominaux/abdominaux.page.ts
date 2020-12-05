import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abdominaux',
  templateUrl: './abdominaux.page.html',
  styleUrls: ['./abdominaux.page.scss'],
})
export class ABDOMINAUXPage  {

  abdo =  [
    {
      route:'PECTORAUX/pectoraux.page.html',
      img : 'assets/exoabdo/crunch au sol.jpg',
      titre: 'Crunch au sol',
      description: "Le crunch est l'exercice de base très efficace pour muscler les abdominaux et raffermir la taille",
    },
    {
      route:'ABDOMINAUX/abdominaux.page.html',
      img : 'assets/exoabdo/sit-up.jpg',
      titre: 'Sit-up',
      description: 'Cet exercice a la réputation de travailler le bas du ventre, là où le crunch au sol sollicite plutôt le haut des abdominaux.',
    },
    {
      route:'BICEPS/biceps.page.html',
      img : 'assets/exoabdo/releves-bassin.jpg',
      titre: 'Relevés de bassin sur plan incliné',
      description: 'Un bon exercice pour le grand droit des abdominaux. Il a la réputation de solliciter le bas des abdos, là ou le crunch classique vise plus le haut.',
    },
    {
      route:'TRICEPS/triceps.page.html',
      img : 'assets/exoabdo/releve-genoux.jpg',
      titre: 'Relevés de genoux',
      description: "Un exercice souvent pratiqué en salle. Les relevés de genoux travaillent les abdominaux et les fléchisseurs de la hanche",
    },
  ];


}
