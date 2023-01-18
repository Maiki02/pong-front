import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BoardModule } from 'src/app/components/board/board.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BoardModule
  ], exports: [
    HomeComponent
  ]
})
export class HomeModule { }
