import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './shared/filter.pipe';
import { GoogleMapsModule } from "@angular/google-maps";
import { FormsModule } from '@angular/forms';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CardComponent } from './components/card/card.component';
import { CardWrapperComponent } from './components/card-wrapper/card-wrapper.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { TratamientosComponent } from './pages/tratamientos/tratamientos.component';
import { TurnosComponent } from './pages/turnos/turnos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from './plantillas/header/header.component';
import { LoginComponent } from './vistas/login/login.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { ContactoInfoComponent } from './components/contacto-info/contacto-info.component';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    CardWrapperComponent,
    ProductosComponent,
    EmpresaComponent,
    TratamientosComponent,
    TurnosComponent,
    ContactoComponent,
    InicioComponent,
    NotFoundComponent,
    FooterComponent,
    CarrouselComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    NuevoComponent,
    EditarComponent,
    routingComponents,
    RedesSocialesComponent,
    ContactoInfoComponent,
    FormularioContactoComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    GoogleMapsComponent,


  ],

  imports: [


    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
