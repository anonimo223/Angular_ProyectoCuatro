import { Component, OnInit } from '@angular/core';
import { Carro } from './carro';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  public carro: Carro;
  public carros: Array<Carro>;

  constructor() { 
    this.carro = new Carro('', '', '');
    this.carros = [
      new Carro('xpc2454', 'Mazda', 'Negro'),
      new Carro('yyy13613', 'Renault', 'Morado'),
    ]
  }

  onSubmit(){
    this.carros.push(this.carro);
  }

  ngOnInit(): void {
  }

}
