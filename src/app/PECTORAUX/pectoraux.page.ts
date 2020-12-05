import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pectoraux',
  templateUrl: './pectoraux.page.html',
  styleUrls: ['./pectoraux.page.scss'],
})
export class PectorauxPage  {

  pectoraux =  [
    {
      
      img : 'assets/exopec/developpe-couche-barre.jpg',
      titre: 'Développé couché barre',
      description: "Le développé couché à la barre est l'exercice de musculation de base pour se forger des pectoraux d'acier. ",
    },
    {
      
      img : 'assets/exopec/dch.jpg',
      titre: 'Développé couché haltères',
      description: 'Le développé couché avec les haltères sur banc plat permet un mouvement plus naturel, une meilleure contraction des pectoraux et un plus grand étirement des muscles',
    },
    {
      
      img : 'assets/exopec/musculaction-pompes.jpg',
      titre: 'Pompes au sol',
      description: "Cet exercice très populaire permet de travailler l'ensemble du buste et notamment les pectoraux, épaules et triceps",
    },
    {
      
      img : 'assets/exopec/ecarte-couche.jpg',
      titre: 'Ecarté couché haltères',
      description: "L'écarté couché sur banc plat est un exercice de musculation d'isolation qui muscle la partie médiane des pectoraux. ",
    },
  ];

}
