import { Pizzatipo } from "./pizzatipo";
import { Sabor } from "./sabor";

export class Pizza {

    id!: number;
    tipo!: Pizzatipo;
    sabor!: Sabor[];
    valorPizza!: number;
}
