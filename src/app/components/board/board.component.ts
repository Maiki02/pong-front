import { Component, OnInit } from '@angular/core';
import { HEIGHT_BOARD, WIDTH_BOARD } from 'src/app/shared/const/dimensions';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  positionPlayer1: any;
  positionPlayer2: any;
  dimensions:any;
  constructor() { 
    this.dimensions={
      width: WIDTH_BOARD + 'px',
      height: HEIGHT_BOARD + 'px'
    }
    this.positionPlayer1 = 0
    this.positionPlayer2 = 0;
  }

  ngOnInit(): void {
  }

  movePlayer(event:any, player:number){
    console.log("Move player");
    console.log("Antes de la funcion",this.positionPlayer1)
    if(player==1){
      this.positionPlayer1 = this.positionPlayer1 + event;
    
    }else{
      this.positionPlayer2 = this.positionPlayer2 + event;
    }
    console.log("Despues dela función", this.positionPlayer1)
  }
}
