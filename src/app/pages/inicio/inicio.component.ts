import { Component, OnInit } from '@angular/core';
import { NutricionService } from 'src/app/services/nutricion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})


export class InicioComponent implements OnInit {

  title1 = 'The Beauty Empire';
  
  constructor(
    private nutricionService: NutricionService
  )   {}

  data:any; 

   mostrarInfoNutricion () {
    this.nutricionService.getNutricionInfo().subscribe(respuesta=> {
      console.log(respuesta);
      this.data = respuesta;
    });
   }

  ngOnInit(): void {
    this.mostrarInfoNutricion();
  }

}
