import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pectoraux',
    loadChildren: () => import('./PECTORAUX/pectoraux.module').then( m => m.PectorauxPageModule)
  },
  {
    path: 'abdominaux',
    loadChildren: () => import('./abdominaux/abdominaux.module').then( m => m.ABDOMINAUXPageModule)
  },
  {
    path: 'biceps',
    loadChildren: () => import('./biceps/biceps.module').then( m => m.BICEPSPageModule)
  },
  {
    path: 'triceps',
    loadChildren: () => import('./triceps/triceps.module').then( m => m.TRICEPSPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule],
  schemas : [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class AppRoutingModule { }
