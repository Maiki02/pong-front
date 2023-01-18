import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ROUTES } from '../const/routes';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  createPlayer(name:string){
    return this.http.post(ROUTES.createPlayer, {name:name});
  }

  getPlayers(){
    return this.http.get(ROUTES.getPlayers);
  }
}
