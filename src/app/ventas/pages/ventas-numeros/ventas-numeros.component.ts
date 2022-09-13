import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ventas-numeros',
    templateUrl: './ventas-numeros.component.html',
    styleUrls: ['./ventas-numeros.component.css']
})
export class VentasNumerosComponent implements OnInit {
    ventasNetas: number = 12435494.1610;
    ventasBrutas: number = 22736465.5680;
    porcentaje: number = 0.488731;

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

}
