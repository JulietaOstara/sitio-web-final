import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.lenght < 3) return value;
    const productos = [];
    for (const product of value) {
      if (product.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        productos.push(product);
      };
    };
    return productos;
  }

}
