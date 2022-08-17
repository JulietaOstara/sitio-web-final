import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  constructor() { }
  filterpost = '';
  productos = [
    {

      imagen: "assets/ventaproductos/cremalabios.jpeg",
      categoria: "Labios",
      title: "Crema Labial",
      contenido: "Hidratacion",
      precio: 2500

    },

    {
      imagen: "assets/ventaproductos/aceitefacial.jpg",
      categoria: "Facial",
      title: "Aceite Facial",
      contenido: "Hidratacion",
      precio: 3500
    },

    {
      imagen: "assets/ventaproductos/lechefacial.jpg",
      categoria: "Facial",
      title: "Leche Facial",
      contenido: "Hidratacion",
      precio: 3000
    },

    {
      imagen: "assets/ventaproductos/lechecorporal.jpg",
      categoria: "Corporal",
      title: "Leche Corporal",
      contenido: "Hidratacion",
      precio: 3500
    },
    {
      imagen: "assets/ventaproductos/aceite2.jpeg",
      categoria: "Corporal",
      title: "Aceite Corporal",
      contenido: "Hidratacion",
      precio: 2400
    }
  ];

  ngOnInit(): void {

  }

}
