import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  articulos!: null;

  constructor(private articulosServicio: ArticulosService) { }

  ngOnInit(): void {
    this.articulos = this.articulosServicio.retornar();
  }

}
