import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Appareil} from "../model/Appareil";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appareils :any;
  url="http://localhost:8080/api/appareil/all"

  constructor(private http:HttpClient) { }

  findAll():Observable<Appareil[]>{
return this.http.get<Appareil[]>(this.url);
  }

  getAppreil(id:number):Observable<Appareil>{
    return this.http.get<Appareil>('${this.url}/id/${id}')
  }

  switchOn(id:number):Observable<Appareil>{
    return this.http.put<Appareil>('this.url/switch/id/${id}',this.getAppreil(id))
  }

  // switchAllOn() {
  //   this.appareils.forEach(appareil => {
  //     appareil.statut = "On";
  //   });
  // }
  //
  //
  // switchAllOff() {
  //   this.appareils.forEach(appareil => {
  //     appareil.statut = "Off";
  //   });}


  switchState(id: number) {
    for (let item of this.appareils) {
      if (item.id == id) {
        if (item.statut == "On") {
          item.statut = "Off";
        } else {
          item.statut = "On";
        }
      }
    }
  }


}
