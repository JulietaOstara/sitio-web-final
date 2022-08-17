import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() imagen? = "assets/ventaproductos/set1.jpg";
  @Input()  categoria: string | undefined;
  @Input() titulo:  string | undefined;
  @Input() contenido:  string | undefined;
  @Input() destacado? = false;
  @Input()  precio: number| undefined;

  ngOnInit(): void {
  }

}
