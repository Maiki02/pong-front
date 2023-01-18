import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersSectionComponent } from './players-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlayersSectionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], exports: [
    PlayersSectionComponent
  ]
})
export class PlayersSectionModule { }
