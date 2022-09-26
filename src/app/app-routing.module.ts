import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./components/heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


//Lazy-loading trata-se de um padrão onde o carregamento de módulos ocorre sob demanda, ou seja, apenas quando solicitado e não necessariamente no primeiro acesso.
