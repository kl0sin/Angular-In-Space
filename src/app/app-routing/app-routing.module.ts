import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BlackHoleComponent } from '../black-hole/black-hole.component';

const routes: Routes = [
  { path: 'space', loadChildren: () => SharedModule },
  { path: '', redirectTo: 'space', pathMatch: 'full' },
  { path: '**', component: BlackHoleComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
