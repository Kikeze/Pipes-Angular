import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    nombre: string = "AlGuN nOmBrE rArO";

    constructor(
        private primengConfig: PrimeNGConfig
    ) {
        // Do nothing
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

}
