import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ListAppareilComponent } from './list-appareil/list-appareil.component';
import {FormsModule} from "@angular/forms";
import {NgFor, NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    ListAppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIf,NgFor
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
