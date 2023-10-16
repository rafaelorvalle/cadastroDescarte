import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MaterialComponent } from './material/material.component';
import { ColetaComponent } from './coleta/coleta.component';
import { RodapeComponent } from './rodape/rodape.component';


import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
// import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MaterialComponent,
    ColetaComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    // FormsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
