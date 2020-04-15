import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  NgRassemblerModule,
} from 'projects/ng-rassembler/src/public-api';

import { LinearRassemblyPageComponent } from './pages/linear-rassembly-page/linear-rassembly-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LinearRassemblyPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgRassemblerModule,
  ],
  providers: [
    
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
