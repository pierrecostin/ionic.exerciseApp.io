import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triceps',
  templateUrl: './triceps.page.html',
  styleUrls: ['./triceps.page.scss'],
})
export class TRICEPSPage  {

  triceps =  [
    {
      
      img : 'assets/exotriceps/barre-front.jpg',
      titre: 'Barre front',
      description:"Le Barre-front est l'un des meilleurs exercices de musculation pour gagner du volume aux triceps"
    },
    {
      
      img : 'assets/exotriceps/extensions.jpg',
      titre: 'Extensions au-dessus de la tête',
      description: ' Les extensions au-dessus de la tête vous permettent de muscler plus particulièrement la longue portion du triceps',
    },
    {
      
      img : 'assets/exotriceps/kick-back.jpg',
      titre: 'kick back',
      description: "Le kick back est un exercice d'isolation pour les triceps. C'est un exercice de finition qui permet de bien congestionner ce muscle à la fin de la séance."
    },
    {
     
      img : 'assets/exotriceps/poulie.jpg',
      titre: 'Extensions à la poulie haute',
      description: "Musclez vos triceps avec les extensions à la poulie haute, un bon exercice d'isolation pour développer ses bras en toute sécurité.",
    },
  ];
  

}
