import {Component, OnInit} from '@angular/core';
import {AppareilService} from "../service/appareil.service";
import {Appareil} from "../model/Appareil";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-list-appareil',
  templateUrl: './list-appareil.component.html',
  styleUrls: ['./list-appareil.component.css']
})
export class ListAppareilComponent implements OnInit{
  isOk:boolean=true;
  appareils: Appareil[] = [];

    appareilAvatar:String="assets/images/avatar1.png"

  constructor(private service:AppareilService,
    private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.AllAppareils();
  }

  AllAppareils(): void {
    this.service.findAll().subscribe(
        (data) => {
          this.appareils = data;
        },
        (error) => {
          console.error('Error:', error);
        }
    );
  }

  updateAppareil(appareil: Appareil): void {
    const app: { id: number; state: boolean } = {
      id: appareil.id,
      state: appareil.state,
    };
    this.service.switchOn(appareil.id, app).subscribe(
        () => {
          console.log("succes");
        },
        (error) => {
          console.error('Error :', error);
        }
    );
  }

    getPhotoUrl(app: Appareil): SafeResourceUrl {
        const photoUrl = app.photo;
        return this.sanitizer.bypassSecurityTrustResourceUrl(photoUrl);
    }

    switch_All(state: boolean): void {
        this.service.switchAll(state).subscribe(
            () => {
                this.AllAppareils();
            },
            (error) => {
                console.error(error);
            }
        );
    }


  // switchonAll(){
  //   this.service.switchAllOn();
  // }
  //
  // switchOffAll() {
  //   this.service.switchAllOff();
  // }


}
