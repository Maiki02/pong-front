import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';
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
  constructor(private socket:Socket) { 
    this.socket.connect();
    this.socket.emit('message', 'Hello World');
    
    this.getMessage().subscribe();


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
    if(player==1){
      this.positionPlayer1 = this.positionPlayer1 + event;
    }else{
      this.positionPlayer2 = this.positionPlayer2 + event;
    }
  }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }
  getMessage() {
    return this.socket.fromEvent('message').pipe(map((data:any) => {
      console.log("Data recibida",data)
    }));
  }

  getCords(positionY:number){
    return {top: positionY + 'px'}
    return {
    "-webkit-transform": "translate(0, "+positionY+");",
    "-moz-transform": "translate(0, "+positionY+");",
    "-ms-transform": "translate(0, "+positionY+");",
    "transform": "translate(0, "+positionY+");",
    }
  }
}
