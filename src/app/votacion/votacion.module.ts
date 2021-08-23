import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Votacion1Component } from './votacion1/votacion1.component';
import { Votacion2Component } from './votacion2/votacion2.component';

@NgModule({
  imports: [
    CommonModule,
    Votacion1Component,
    Votacion2Component,
    SharedModule
  ],
  declarations: []
})
export class VotacionModule { }