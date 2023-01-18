import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BoardModule } from 'src/app/components/board/board.module';
import { PlayersSectionModule } from 'src/app/components/players-section/players-section.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BoardModule,
    PlayersSectionModule
  ], exports: [
    HomeComponent
  ]
})
export class HomeModule { }
