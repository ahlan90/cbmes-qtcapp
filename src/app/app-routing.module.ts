import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ocorrencias',
    pathMatch: 'full'
  },
  {
    path: 'ocorrencias',
    loadChildren: () => import('./ocorrencia-list/ocorrencia-list.module').then(m => m.OcorrenciaListPageModule)
  },
  {
    path: 'nova',
    loadChildren: () => import('./ocorrencia-new/ocorrencia-new.module').then(m => m.OcorrenciaNewPageModule)
  },
  {
    path: 'atualizar/:id',
    loadChildren: () => import('./ocorrencia-update/ocorrencia-update.module').then( m => m.OcorrenciaUpdatePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
