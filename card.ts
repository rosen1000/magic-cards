import { Energy } from "./energy";
import { Curse } from "./curse";
export class Card {
    energy: Energy;
    number: string;
    revealed: boolean;
    curse: Curse | null;
    absorb: Array<Object>;
    constructor(energy: Energy, number: string, reveal?: boolean) {
        this.energy = energy;
        this.number = number;
        this.revealed = reveal || false;
        this.curse = null;
        this.absorb = [0, ""];
    }
    curse_it() {
        // TODO: implement curses
    }
    value() {
        return this.energy.value + this.number;
    }
}