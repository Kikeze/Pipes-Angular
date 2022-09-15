import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: "vuela"
})
export class VuelaPipe implements PipeTransform {

    constructor() {
        // Do nothing
    }

    transform(value: boolean): string {
        return (value) ? "vuela" : "no vuela";
    }

}
