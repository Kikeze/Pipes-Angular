import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';


@Component({
    selector: 'app-ventas-ordenar',
    templateUrl: './ventas-ordenar.component.html',
    styleUrls: ['./ventas-ordenar.component.css']
})
export class VentasOrdenarComponent implements OnInit {

    isUpper:boolean = true;

    heroes: Heroe[] = [
        {nombre: "Superman", vuela: true, color: Color.azul},
        {nombre: "Batman", vuela: false, color: Color.negro},
        {nombre: "Robin", vuela: false, color: Color.rojo},
        {nombre: "Tornado rojo", vuela: true, color: Color.rojo},
        {nombre: "Linterna verde", vuela: true, color: Color.verde},
    ];

    ordenarPor:string = "nombre";

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    cambiarMayusculas() {
        this.isUpper = !this.isUpper;
    }

    ordenaArrelgoPor(campo: string) {
        this.ordenarPor = campo;
    }

}
