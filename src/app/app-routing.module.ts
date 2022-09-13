import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VentasBasicosComponent } from './ventas/pages/ventas-basicos/ventas-basicos.component';
import { VentasNumerosComponent } from './ventas/pages/ventas-numeros/ventas-numeros.component';
import { VentasNoComunesComponent } from './ventas/pages/ventas-no-comunes/ventas-no-comunes.component';
import { VentasOrdenarComponent } from './ventas/pages/ventas-ordenar/ventas-ordenar.component';


const routes: Routes = [
    {
        path: "",
        component: VentasBasicosComponent,
        pathMatch: "full"
    },
    {
        path: "numeros",
        component: VentasNumerosComponent
    },
    {
        path: "no-comunes",
        component: VentasNoComunesComponent
    },
    {
        path: "ordenar",
        component: VentasOrdenarComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
