import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public active : boolean = false
  constructor() { }

  ngOnInit(): void {
  }
//funcion para activar hamburguesa
  setActive(): void{
    this.active = !this.active
  }

}
