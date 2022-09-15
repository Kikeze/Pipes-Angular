import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { VentasNumerosComponent } from './pages/ventas-numeros/ventas-numeros.component';
import { VentasNoComunesComponent } from './pages/ventas-no-comunes/ventas-no-comunes.component';
import { VentasBasicosComponent } from './pages/ventas-basicos/ventas-basicos.component';
import { VentasOrdenarComponent } from './pages/ventas-ordenar/ventas-ordenar.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
    declarations: [
        VentasNumerosComponent,
        VentasNoComunesComponent,
        VentasBasicosComponent,
        VentasOrdenarComponent,
        MayusculasPipe,
        VuelaPipe,
        OrdenarPipe,
    ],
    imports: [
        CommonModule,
        PrimeNgModule,
    ],
    exports: [
        VentasNumerosComponent,
        VentasNoComunesComponent,
        VentasBasicosComponent,
        VentasOrdenarComponent,
    ],
})
export class VentasModule { }
