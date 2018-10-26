import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cagada: boolean = false;

  constructor( private http: HttpClient ) { 
    
     // Leer archivo JSON
     this.http.get( 'assets/data/data-pagina.json' )
     .subscribe( (res: InfoPagina) => {
       this.cagada = true;
       this.info = res;
       console.log( res );
     } )
  }
}
