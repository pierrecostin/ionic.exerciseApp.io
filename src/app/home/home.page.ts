import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  category =  [
    {
      route : "/pectoraux",
      img : 'assets/img/pectoraux.jpg',
      titre: 'PECTORAUX',
      description: 'Découvrez toutes les astuces pour muscler vos pectoraux.',
    },
    {
      route : "/abdominaux",
      img : 'assets/img/abdo.png',
      titre: 'ABDOMINAUX',
      description: 'Découvrez toutes les astuces pour muscler vos Abdominaux.',
    },
    {
      route : "/biceps",
      img : 'assets/img/biceps.jpg',
      titre: 'BICEPS',
      description: 'Découvrez toutes les astuces pour muscler vos Biceps.',
    },
    {
      route : "/triceps",
      img : 'assets/img/triceps.jpg',
      titre: 'TRICEPS',
      description: 'Découvrez toutes les astuces pour muscler vos Triceps.',
    },
  ];
}
