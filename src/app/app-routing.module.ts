import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { ProductsComponent } from './components/products/products.component';


import { ContactoComponent } from './pages/contacto/contacto.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { TratamientosComponent } from './pages/tratamientos/tratamientos.component';
import { TurnosComponent } from './pages/turnos/turnos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent} from './vistas/login/login.component';
import { NuevoComponent} from './vistas/nuevo/nuevo.component';
import { EditarComponent} from './vistas/editar/editar.component';
import { DashboardComponent} from './vistas/dashboard/dashboard.component';
import { CartComponent} from './components/cart/cart.component';




const routes: Routes = [
  {path:"inicio",component: InicioComponent},
  {path:"productos",component:ProductosComponent},
  {path:"empresa",component: EmpresaComponent},
  {path:"tratamientos",component: TratamientosComponent},
  {path:"contacto",component: ContactoComponent},
  {path:"turnos",component: TurnosComponent},
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'nuevo', component: NuevoComponent},
  { path:'editar/:id', component:EditarComponent },
  {path:'dashboard', component: DashboardComponent},
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:"**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,NuevoComponent,EditarComponent]
