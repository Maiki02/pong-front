import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { PlayerModule } from '../player/player.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    PlayerModule,
    SocketIoModule.forRoot(config)
  ], exports: [
    BoardComponent
  ]
})
export class BoardModule { }
