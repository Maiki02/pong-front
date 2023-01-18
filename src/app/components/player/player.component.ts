import { Component,EventEmitter,HostListener, Input, Output } from '@angular/core';
import { HEIGHT_BOARD, HEIGHT_PLAYER, MOVEMENT_PLAYER, WIDTH_PLAYER } from 'src/app/shared/const/dimensions';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  dimensions:any;
  @Input() positionY!:number;
  countKeyPress:number=5;

  @Output() movePlayer=new EventEmitter<number>();
  constructor() { 
    this.dimensions={
      width: WIDTH_PLAYER + 'px',
      height: HEIGHT_PLAYER + 'px'
    }
  }

  /*Escucha los enventos del teclado y ejecuta la acción correspondiente*/
  @HostListener('document:keydown', ['$event'])
  listenerKeyDown(event: KeyboardEvent) {
    console.log(event);
    if(true){
      console.log(event.key.toLowerCase());
      switch (event.key.toLowerCase()) {
        case 'arrowup': this.moveTo(-(MOVEMENT_PLAYER) - this.countKeyPress); 
        this.countKeyPress++; break;
        case 'arrowdown': this.moveTo(MOVEMENT_PLAYER + this.countKeyPress); 
        this.countKeyPress++; break;
        default: break;
      }
    }
  }

  @HostListener('document:keyup', ['$event'])
  listenerKeyUp(event: KeyboardEvent) {
    this.countKeyPress=5;
  }

  /*Mueve el jugador en la dirección indicada y emite el evento*/
  moveTo(number:number){
    if(number<0){
      //Move to up
      if(this.positionY + number < 0){
        return this.movePlayer.emit(-this.positionY);
      }
    } else {
      //Move to down
      if(this.positionY + number > (HEIGHT_BOARD - HEIGHT_PLAYER)){
        return this.movePlayer.emit(HEIGHT_BOARD - HEIGHT_PLAYER - this.positionY);
      }
    }
    this.movePlayer.emit(number);
  }


}
