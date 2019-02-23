import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TipoCombustiblePage } from './tipo-combustible.page';

const routes: Routes = [
  {
    path: '',
    component: TipoCombustiblePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TipoCombustiblePage]
})
export class TipoCombustiblePageModule {}
