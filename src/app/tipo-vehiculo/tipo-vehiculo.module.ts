import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TipoVehiculoPage } from './tipo-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: TipoVehiculoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TipoVehiculoPage]
})
export class TipoVehiculoPageModule {}
