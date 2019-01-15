import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaObjectivesComponent } from './ruta-objectives/ruta-objectives.component';
import { PrincipalComponent } from './principal/principal.component';
import { Ruta404Component } from './ruta404/ruta404.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { RutaContextComponent } from './ruta-context/ruta-context.component';
import { RutaProfileComponent } from './ruta-profile/ruta-profile.component';
import { RutaNextActivitiesComponent } from './ruta-next-activities/ruta-next-activities.component';

const routes: Routes = [
  {path:"", pathMatch: "full", redirectTo: "context"} , 
 /* {path:"inicio", component: NavegacionComponent, children:[
    {path:"context", component:RutaContextComponent},
    {path:"principal", component: PrincipalComponent} 
  ]} , */
  {path:"context", component:RutaContextComponent},
  {path:"principal", component: PrincipalComponent} , 
  {path:"objectives", component: RutaObjectivesComponent} , 
  {path:"profile", component: RutaProfileComponent} , 
  {path:"no-encontrado", component: Ruta404Component} , 
  {path:"next-activities", component: RutaNextActivitiesComponent} , 
  {path:"**", redirectTo: "no-encontrado"} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
