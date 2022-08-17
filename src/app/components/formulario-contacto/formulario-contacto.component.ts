import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface contactForm {
  'name': String,
  'mail': String,
  'checkRegistro': boolean,
  'opciones': String,
  'msg': string
}

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.scss']
})
export class FormularioContactoComponent implements OnInit {

  Formulario = {
    name: '',
    mail: '',
    checkRegistro: false,
    opciones: '',
    msg: ''
  }
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(values: any): void {
    console.log('Form values', values)
  }

}
