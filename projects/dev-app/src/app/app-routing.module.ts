import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinearRassemblyPageComponent } from './pages/linear-rassembly-page/linear-rassembly-page.component';


const routes: Routes = [
  { path: 'linear-rassembly', component: LinearRassemblyPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
