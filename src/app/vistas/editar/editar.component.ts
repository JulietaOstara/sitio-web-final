import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PacienteI } from '../../modelos/paciente.interface';
import { ResponseI } from '../../modelos/response.interface';
import { ApiService } from '../../service/api/api.service';
import { AlertasService } from '../../service/alertas/alertas.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component( {
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: [ './editar.component.scss' ]
} )

export class EditarComponent implements OnInit {

  title = "blog";

  getValues ( val: any ) {
    console.warn( val )
  }

  constructor ( private activerouter: ActivatedRoute, private router: Router, private api: ApiService, private alertas: AlertasService ) { }

  datosPaciente: PacienteI;

  editarForm = new FormGroup( {
    pacienteId: new FormControl( '' ),
    dni: new FormControl( '' ),
    nombre: new FormControl( '' ),
    direccion: new FormControl( '' ),
    codigoPostal: new FormControl( '' ),
    telefono: new FormControl( '' ),
    genero: new FormControl( '' ),
    fechaNacimiento: new FormControl( '' ),
    correo: new FormControl( '' ),
    token: new FormControl( '' ),
  } );


  ngOnInit (): void {
    let pacienteid = this.activerouter.snapshot.paramMap.get( 'id' );
    let token = this.getToken();
    this.api.getSinglePactient( pacienteid ).subscribe( data => {
      this.datosPaciente = data;
      this.editarForm.setValue( {
        'nombre': this.datosPaciente.Nombre,
        'correo': this.datosPaciente.Correo,
        'dni': this.datosPaciente.DNI,
        'direccion': this.datosPaciente.Direccion,
        'codigoPostal': this.datosPaciente.CodigoPostal,
        'genero': this.datosPaciente.Genero,
        'telefono': this.datosPaciente.Telefono,
        'token': token,
        'pacienteId': pacienteid,
        'fechaNacimiento': this.datosPaciente.FechaNacimiento
      } );
    } )
  }


  getToken () {
    return localStorage.getItem( 'token' );
  }

  postForm ( form: PacienteI ) {
    this.api.putPatient( form ).subscribe( data => {
      let respuesta: ResponseI = data;
      if ( respuesta.status == "ok" ) {
        this.alertas.showSuccess( 'Datos modificados', 'Hecho' );
      } else {
        this.alertas.showError( respuesta.result.error_msg, 'Error' );
      }
    } )
  }

  eliminar ( datos: PacienteI ) {
    this.api.deletePatient( datos ).subscribe( data => {
      let respuesta: ResponseI = data;
      if ( respuesta.status == "ok" ) {
        this.alertas.showSuccess( 'Paciente eliminado', 'Hecho' );
        this.router.navigate( [ 'dashboard' ] );
      } else {
        this.alertas.showError( respuesta.result.error_msg, 'Error' );
      }
    } )
  }


  salir () {
    this.router.navigate( [ 'dashboard' ] );
  }



}