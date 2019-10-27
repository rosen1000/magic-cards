import { Trait } from "./traits";

export class Enemy {
    name: string;
    effects: Array<Trait>;
    constructor(name: string, effects: Array<Trait>) {
        this.name = name;
        this.effects = effects;
    }
}