import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { PlayerModule } from '../player/player.module';



@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    PlayerModule
  ], exports: [
    BoardComponent
  ]
})
export class BoardModule { }
