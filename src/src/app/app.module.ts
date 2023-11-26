import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MaterialComponent } from './material/material.component';
import { ColetaComponent } from './coleta/coleta.component';
import { RodapeComponent } from './rodape/rodape.component';


import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { DisponibilidadeService } from './disponibilidade.service';


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
    FormsModule,
    ReactiveFormsModule,
    SliderModule
  ],
  providers: [DisponibilidadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
