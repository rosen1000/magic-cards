import { Spell } from "./spell";
import { Item } from "./item";
import { Class } from "./class";
import { EnergyBar } from "./energyBar";

export class Player {
    maxHP: number;
    HP: number;
    name: string;
    spells: Array<Spell>;
    items: Array<Item>;
    energyBars: Array<EnergyBar>;
    constructor (startingHP: number, name: string, clas: Class) {
        this.maxHP = startingHP;
        this.HP = startingHP;
        this.name = name;
        this.items = [];
        this.spells = [];
        this.energyBars = [];
    }
}