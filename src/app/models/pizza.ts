/*import { Pizzatipo } from "./pizzatipo";
import { Sabor } from "./sabor";

export class Pizza {

    id!: number;
    tipo!: Pizzatipo;
    sabor!: Sabor[];
    valorPizza!: number;
}
*/


import { Pizzatipo } from "./pizzatipo";
import { Sabor } from "./sabor";

export class Pizza {
    id!: number;
    tipo!: Pizzatipo;
    sabor!: Sabor[];
    valorPizza!: number;

    constructor() {
        this.id = 0;
        this.tipo = new Pizzatipo();
        this.sabor = [];
        this.valorPizza = 0;
    }
}
