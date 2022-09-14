import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
    selector: 'app-ventas-no-comunes',
    templateUrl: './ventas-no-comunes.component.html',
    styleUrls: ['./ventas-no-comunes.component.css']
})
export class VentasNoComunesComponent implements OnInit {
    nombre: string = "Susana";
    genero: string = "femenino";
    genmap = {
        "masculino": "invitarlo",
        "femenino": "invitarla",
        "other": "invitarle"
    }

    clientes: string[] = ["Maria","Pedro","Juan","Sonso","Tarado","Menso","Zoquete"];
    climap = {
        "=0": "no tenemos ningun cliente esperando",
        "=1": "tenemos un cliente esperando",
        "=2": "tenemos dos clientes esperando",
        "other": "tenemos # clientes en espera"
    }

    persona = {
        nombre: "Alguien",
        apellido: "",
        email: "alguien@correo.com",
        alias: "Sutano",
        direccion: "Algun lugar",
        edad: 22,
        isNew: false
    };

    heroes = [
        {
            nombre: "Superman",
            vuela: true
        },
        {
            nombre: "Batman",
            vuela: false
        },
        {
            nombre: "Aquaman",
            vuela: false
        }
    ]

    contador = interval(3000);

    valor = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Termina la promesa");
        }, 5000);
    });

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    cambiarPersona() {
        this.nombre = "Pendejin";
        this.genero = "masculino";
    }

    borrarCliente() {
        this.clientes.pop();
    }

}
