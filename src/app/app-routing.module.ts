import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from '../app/pages/principal/principal.component';
import { ListaComponent } from '../app/pages/lista/lista.component';
import { AdicionarComponent } from '../app/pages/adicionar/adicionar.component';

const routes: Routes = [
  {path: 'vistacard', component: PrincipalComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'adicionar', component: AdicionarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
