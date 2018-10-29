import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cagada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

   }
    
     private cargarInfo() {
      // Leer archivo JSON
      this.http.get( 'assets/data/data-pagina.json' )
      .subscribe( (res: InfoPagina) => {
        this.cagada = true;
        this.info = res;
      });
     }

     private cargarEquipo(){

       // Leer el archivo JSON
      this.http.get( 'https://angualr-html.firebaseio.com/equipo.json' )
      .subscribe( (res: any[]) => {
        
        this.equipo = res;
      });
     }
  }
