import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RutaObjectivesComponent } from './ruta-objectives/ruta-objectives.component';
import { Ruta404Component } from './ruta404/ruta404.component';
import { RuraContextComponent } from './rura-context/rura-context.component';
import { RutaContextComponent } from './ruta-context/ruta-context.component';
import { RutaProfileComponent } from './ruta-profile/ruta-profile.component';
import { RutaNextActivitiesComponent } from './ruta-next-activities/ruta-next-activities.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    NavegacionComponent,
    RutaObjectivesComponent,
    Ruta404Component,
    RuraContextComponent,
    RutaContextComponent,
    RutaProfileComponent,
    RutaNextActivitiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
