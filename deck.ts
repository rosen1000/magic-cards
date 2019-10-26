import * as Ascii from "ascii-table";
import { Energy } from "./energy";
import { Card } from "./card";
const table = new Ascii().setHeading("1", "2", "3", "4", "5", "6", "7");
let deck = [[], [], [], [], [], [], []];
const possible = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

export class Deck {
    deck: Array<Array<Card>>;
    constructor (rolls: number, columns: number) {
        if (rolls <= 0) throw new Error("Rolls can't be null");
        if (rolls > 7) throw new Error("Rolls can't be more than the maximum");
        if (columns <= 0) throw new Error("Columns can't be null");
        let temp;
        for (let i = 0; i < rolls; i++) {
            temp = Array<Card>();
            for (let j = 0; j < columns - 1; j++) {
                temp.push(
                    new Card (new Energy(Math.floor(Math.random() * 4)),
                    possible[Math.floor(Math.random() * possible.length)]
                ));
            }
            temp.push(
                new Card(new Energy(Math.floor(Math.random() * 4)),
                possible[Math.floor(Math.random() * possible.length)], true));
            deck.push(temp);
        }
    }
    damage(roll: number, end?: boolean) {
        if (end == true) {
            deck.slice()
        } else {

        }
    }
}