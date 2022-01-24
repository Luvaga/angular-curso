import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[]= ['Spiderman','Iroman','Hulk','Thor','Capitan america'];
  heroeBorrado:string='';
borrarHeroe(){
  console.log('Borrando...');
  this.heroeBorrado = this.heroes.shift() || '';
}
}
