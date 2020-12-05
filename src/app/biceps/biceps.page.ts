import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.page.html',
  styleUrls: ['./biceps.page.scss'],
})
export class BICEPSPage  {

  biceps =  [
    {
      
      img : 'assets/exobiceps/curl-barre.jpg',
      titre: 'Curl barre',
      description: 'Cet exercice de musculation sollicite et développe les biceps. Le curl barre est l’exercice d’isolation de base pour les biceps',
    },
    {
     
      img : 'assets/exobiceps/curl-haltere.jpg',
      titre: 'Curl haltère',
      description: 'Cet exercice de musculation sollicite et développe les biceps. Les haltères permettent pas mal de variantes intéressantes.',
    },
    {
      
      img : 'assets/exobiceps/curl-pupitre.jpg',
      titre: 'Curl pupitre barre',
      description: 'Cet exercice de musculation sollicite et développe les biceps si vous utilisez un lest de plus en plus lourd. Le pupitre permet de plus se concentrer sur le muscle et évite de tricher en se balançant.',
    },
    {
      
      img : 'assets/exobiceps/curl-concentration.jpg',
      titre: 'Curl concentration',
      description: "Les curls à la barre ou aux haltères sont les exercices de musculation de base bien utiles pour développer la massse de vos biceps et obtenir des gros bras. Vous devrez donc les privilégier.",
    },
  ];

}
