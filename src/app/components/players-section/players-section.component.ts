import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-players-section',
  templateUrl: './players-section.component.html',
  styleUrls: ['./players-section.component.scss']
})
export class PlayersSectionComponent implements OnInit {
  name = new FormControl('');
  isLogin: boolean = false;
  players: string[]=[];
  isLoaderPlayers: boolean = false;
  isCreatingPlayer: boolean = false;
  constructor(private playerSvc:PlayerService) {
    this.getNameInLocalStorage();
    this.getPlayers();

  }

  ngOnInit(): void {
  }

  sendNameToSave(){
    this.isCreatingPlayer = true;
    this.isLogin=true;

    if(this.name.value){
      this.playerSvc.createPlayer(this.name.value).subscribe((data:any)=>{
        console.log(data)
        if(data.status=='ok'){
          this.isLogin=true;
          this.isCreatingPlayer = false;
          this.saveNameInLocalStorage(this.name.value);
          this.getPlayers();
        } else {
          this.isLogin=false;
          this.isCreatingPlayer = false;
        }
      }); 
    }
  }

  getPlayers(){
    this.isLoaderPlayers = true;
    this.playerSvc.getPlayers().subscribe((data:any)=>{
      console.log(data)
      if(data.status=='ok'){
        this.isLoaderPlayers = false;
        this.players = data.data;
      }
    })
  }

  saveNameInLocalStorage(name:any){
    localStorage.setItem('name', JSON.stringify(name));
  }

  getNameInLocalStorage(){
    let name=localStorage.getItem('name');
    if(name){
      this.isLogin=true;
      //this.name.value=name;
    }
  }

}
