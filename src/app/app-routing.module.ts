import { NgModule } from '@angular/core';
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
    path: 'tiendas',
    loadChildren: () => import('./tiendas/tiendas.module').then( m => m.TiendasPageModule)
  },
  {
    path: 'cupones',
    loadChildren: () => import('./cupones/cupones.module').then( m => m.CuponesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },  {
    path: 'pizza',
    loadChildren: () => import('./pizza/pizza.module').then( m => m.PizzaPageModule)
  },
  {
    path: 'hamburguesas',
    loadChildren: () => import('./hamburguesas/hamburguesas.module').then( m => m.HamburguesasPageModule)
  },
  {
    path: 'comida-china',
    loadChildren: () => import('./comida-china/comida-china.module').then( m => m.ComidaChinaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
