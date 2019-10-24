import { Game } from "./game";
let types = ["⚔", "🛡", "👣", "👁"];
export { types };
export class Type {
    private attack = types[0];
    private defence = types[1];
    private agility = types[2];
    private willpower = types[3];
    value;
    constructor (type: number) {
        this.change(type);
    }
    change(type: number) {
        switch (type) {
            case 0: 
                this.value = this.attack;
                break;
            case 1:
                this.value = this.defence;
                break;
            case 2:
                this.value = this.agility;
                break;
            case 3:
                this.value = this.willpower;
                break;
            default:
                throw new Error("Type can be selected only from 0 to 3");
        }
    }
}
export class Spell {
    name: string;
    type: string;
    cost: number;
    appears: number | Array<number>;
    require: null | string;
    effect: Function;
    constructor (name: string, type: number, cost: number, appears: number | Array<number>, require: null | string, effect: (game: Game, selected: number) => void) {
        this.name = name;
        switch (type) {
            case 0:
                this.type = "attack";
                break;
            case 1:
                this.type = "defence";
                break;
            case 2:
                this.type = "agility"
                break;
            case 3:
                this.type = "willpower"
                break;
            default:
                throw new Error("No valid card type when loading some of the cards, can be only 1(=attack), 2(=defence), 3(=agility), 4(=willpower)");
        }
        if (cost < 0) {
            throw new Error("Cost can't be negative");
        }
        if (cost > 10) {
            throw new Error("Cost can't exceed maximum energy (10)");
        }
        this.cost = cost;
        this.appears = appears;
        this.require = require;
        this.effect = effect;
    }
}