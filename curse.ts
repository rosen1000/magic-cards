import { Card } from "./card";

export class Curse {
    name: string;
    effect: Function;
    constructor(name: string, effect: (card: Card) => void) {
        this.name = name;
        this.effect = effect;
    }
}