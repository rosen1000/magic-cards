import { Spell } from "./spell";
import { Item } from "./item";
import { Class } from "./class";

export class Player {
    maxHP: number;
    HP: number;
    name: string;
    spells: Array<Spell>
    items: Array<Item>
    constructor (startingHP: number, name: string, clas: Class) {
        this.maxHP = startingHP;
        this.HP = startingHP;
        this.name = name;
        this.items = [];
    }
}