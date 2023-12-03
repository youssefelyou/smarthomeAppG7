import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Appareil} from "../model/Appareil";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppareilService {


  url="http://localhost:8080/api/appareil"

  constructor(private http:HttpClient) { }

  findAll(): Observable<Appareil[]> {
    return this.http.get<Appareil[]>(`${this.url}/all`);
  }

  save(appareil: Appareil): Observable<Appareil> {
    return this.http.post<Appareil>(`${this.url}/save`, appareil);
  }

  getAppreil(id:number):Observable<Appareil>{
    return this.http.get<Appareil>('${this.url}/${id}')
  }

  switchOn(id: number, appareil: { id: number; state: boolean }): Observable<Appareil>{
    return this.http.put<Appareil>('${this.url}/switch/${id}',appareil)
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




}
