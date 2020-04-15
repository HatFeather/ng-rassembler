import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinearRassemblyPageComponent } from './pages/linear-rassembly-page/linear-rassembly-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'linear-rassembly', component: LinearRassemblyPageComponent },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
