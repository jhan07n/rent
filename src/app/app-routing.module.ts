import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosPageModule' },
  { path: 'marcas', loadChildren: './marcas/marcas.module#MarcasPageModule' },
  { path: 'cliente', loadChildren: './cliente/cliente.module#ClientePageModule' },
  { path: 'inspeccion', loadChildren: './inspeccion/inspeccion.module#InspeccionPageModule' },
  { path: 'renta', loadChildren: './renta/renta.module#RentaPageModule' },
  { path: 'tipo-vehiculo', loadChildren: './tipo-vehiculo/tipo-vehiculo.module#TipoVehiculoPageModule' },
  { path: 'tipo-combustible', loadChildren: './tipo-combustible/tipo-combustible.module#TipoCombustiblePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
