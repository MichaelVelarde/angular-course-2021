import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1Component } from './app1/app1.component';
import { VotacionModule } from '../votacion/votacion.module';
import { JuradosModule } from '../jurados/jurados.module';

@NgModule({
  imports: [
    CommonModule,
    App1Component,
    VotacionModule,
    JuradosModule
  ],
  declarations: []
})
export class AppModule { }