import { Component,Input } from '@angular/core';
import {AppareilService} from "../service/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent {
  // @Input() id!:number;
  // @Input() appareilName: String = "Téléphone";
  // @Input() appareilStatut:String="On";
  // appareilAvatar:String="assets/images/avatar1.png"

  constructor(private service:AppareilService) {
  }

  // getColor():string{
  //   if(this.appareilStatut=="On")
  //     return "green";
  //   else return "red"
  // }


}
