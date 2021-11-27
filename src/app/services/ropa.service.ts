import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {

  constructor() { }
  
  public coleccion_ropa = ['piyama','blusa','boxer'];

  addRopa(nombre_prenda: string){ //: Array<string> 
    this.coleccion_ropa.push(nombre_prenda);
    return this.getRopa(); //Porque mierda esto no da :)
  }
  deleteRopa(index: number){
    this.coleccion_ropa.splice(index, 1);
    return this.getRopa();
  }
  getRopa(){
    return this.coleccion_ropa;
  }
}
