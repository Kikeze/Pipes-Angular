import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-ventas-basicos',
    templateUrl: './ventas-basicos.component.html',
    styleUrls: ['./ventas-basicos.component.css']
})
export class VentasBasicosComponent implements OnInit {
    nombreLower: string = "alguien";
    nombreUpper: string = "ALGUIEN";
    nombreCompleto: string = "AlGuIeN rArO";

    fecha: Date = new Date();

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

}


