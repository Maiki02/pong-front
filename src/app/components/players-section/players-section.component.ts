import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ResponseI } from 'src/app/shared/interfaces/interfaces';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-players-section',
  templateUrl: './players-section.component.html',
  styleUrls: ['./players-section.component.scss']
})
export class PlayersSectionComponent implements OnDestroy {
  name = new FormControl('');
  isLogin: boolean = false;
  players: string[]=[];
  isLoaderPlayers: boolean = false;
  message: string = '';
  constructor(private playerSvc:PlayerService) {
    this.getNameInLocalStorage();
    this.getPlayers();
  }

  ngOnDestroy(){
    this.disconnect();
  }

  sendNameToSave(){
    this.isLogin=true;

    if(this.name.value){
      this.playerSvc.createPlayer(this.name.value).subscribe((response:ResponseI)=>{
        console.log(response)
        if(response.status=='ok'){
          this.isLogin=true;
          this.saveNameInLocalStorage(this.name.value);
          this.getPlayers();
          this.message='';
        } else {
          this.isLogin=false;
          this.message = response.message;
          this.name.setValue('');
        }
      }); 
    }
  }

  getPlayers(){
    this.isLoaderPlayers = true;
    this.playerSvc.getPlayers().subscribe((response:ResponseI)=>{
      console.log(response)
      if(response.status=='ok'){
        this.isLoaderPlayers = false;
        this.players = response.data;
      }
    })
  }

  saveNameInLocalStorage(name:any){
    localStorage.setItem('name', JSON.stringify(name));
  }

  getNameInLocalStorage(){
    let name=localStorage.getItem('name');
    if(name){
      console.log("Name,existe");
      this.name.setValue(JSON.parse(name));
      console.log("Seteamos value", this.name.value)
      this.sendNameToSave();
    }
  }

  disconnect(){
    if(this.name.value){
      this.playerSvc.disconnect(this.name.value).subscribe((response:ResponseI)=>{
        console.log(response);
        if(response.status=='ok'){
          this.isLogin=false;
          localStorage.removeItem('name');
        }
      })
    }
  }

}
