import {Component, OnInit} from '@angular/core';
import {AppareilComponent} from "../appareil/appareil.component";
import {AppareilService} from "../service/appareil.service";
import {Appareil} from "../model/Appareil";

@Component({
  selector: 'app-list-appareil',
  templateUrl: './list-appareil.component.html',
  styleUrls: ['./list-appareil.component.css']
})
export class ListAppareilComponent implements OnInit{
  isOk:boolean=true;
  appareils !:Appareil;

  constructor(private service:AppareilService) {
    setTimeout(()=>{
      this.isOk=false
    },5000)
  }


  // switchonAll(){
  //   this.service.switchAllOn();
  // }
  //
  // switchOffAll() {
  //   this.service.switchAllOff();
  // }

  ngOnInit(): void {
    this.appareils=this.service.findAll().subscribe(data=>{
          this.appareils = data;
    })
  }
}
