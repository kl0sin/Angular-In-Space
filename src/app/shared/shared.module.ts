import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HangarComponent } from '../hangar/hangar.component';

const routes: Routes = [
  { path: '', component: HangarComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FormsModule
  ],
  declarations: []
})
export class SharedModule { }
