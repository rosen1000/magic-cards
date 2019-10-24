import * as Ascii from "ascii-table";
import { types } from "./spell";
const table = new Ascii().setHeading("1", "2", "3", "4", "5", "6", "7");
let deck = [[], [], [], [], [], [], []];
const possible = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

export class Deck {
    deck: Array<Array<string>>;
    constructor (rolls: number, columns: number) {
        if (rolls <= 0) throw new Error("Rolls can't be null");
        if (rolls > 7) throw new Error("Rolls can't be more than the maximum");
        if (columns <= 0) throw new Error("Columns can't be null");
        let temp;
        for (let i = 0; i < rolls; i++) {
            temp = Array<string>();
            for (let j = 0; j < columns; j++) {
                temp.push(
                    types[Math.floor(Math.random() * 4)] + 
                    possible[Math.random() * possible.length]);
            }
            deck.push(temp);
        }
    }
}

