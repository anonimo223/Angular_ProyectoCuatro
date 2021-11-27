import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RopaComponent } from './ropa/ropa.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { FormsModule } from '@angular/forms';
import { CarroComponent } from './carro/carro.component';

@NgModule({
  declarations: [
    AppComponent,
    RopaComponent,
    ArticulosComponent,
    CarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
