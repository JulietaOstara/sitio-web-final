import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api/api.service';
import { Router } from '@angular/router';


import { ListapacientesI } from '../../modelos/listapacientes.interface';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
} )
export class DashboardComponent implements OnInit {


  'pacientes': ListapacientesI[];

  constructor ( private api: ApiService, private router: Router ) { }

  ngOnInit (): void {
    this.api.getAllPatients( 1 ).subscribe( data => {
      this.pacientes = data;
    } )
  }


  editarPaciente ( id: any ) {
    this.router.navigate( [ 'editar', id ] );
  }

  nuevoPaciente () {
    this.router.navigate( [ 'nuevo' ] );
  }



}
