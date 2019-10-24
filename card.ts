import { Type } from "./spell";
export class Card {
    type: Type;
    number: string;
    value: string;
    constructor () {
        this.value = this.type.value + this.number;
    }
}