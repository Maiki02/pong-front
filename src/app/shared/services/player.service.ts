import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ROUTES } from '../const/routes';
import { ResponseI } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  createPlayer(name:string){
    return this.http.post<ResponseI>(ROUTES.createPlayer, {name:name});
  }

  getPlayers(){
    return this.http.get<ResponseI>(ROUTES.getPlayers);
  }

  disconnect(name:string){
    return this.http.post<ResponseI>(ROUTES.disconnect, {name:name});

  }
}
