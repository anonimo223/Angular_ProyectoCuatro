import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css'],
  providers: [RopaService],
})
export class RopaComponent implements OnInit {
  public listado_ropa!: Array<string>;
  public prenda_a_guardar!: string; 

  constructor(private _ropaService: RopaService) {}

  ngOnInit(){
    this.listado_ropa = this._ropaService.getRopa(); //pedir ayuda
  }
  guardarPrenda() {
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = "holi"; // pedir ayuda
  }
  eliminarPrenda(index: number) {
    this._ropaService.deleteRopa(index);
  }
}
