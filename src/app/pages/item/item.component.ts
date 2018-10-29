import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute,
               public productosService: ProductosService ) { }

  ngOnInit() {
    this.route.params
      .subscribe( param => {
        this.productosService.getProducto(param['id'])
          .subscribe( (producto: ProductoDescripcion) => {
            this.id = param['id'];
            this.producto = producto;
          });
    });
  }

}
