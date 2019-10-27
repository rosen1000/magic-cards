import { Spell } from "./spell";
import * as Bash from "./spells/bash";

export class Class {
    name: string;
    spells: Array<Spell>;
    constructor (name: string) {
        this.name = name;
        this.spells = [];
        switch (name) {
            case "Warrior":
                this.spells.push(new Bash.Bash().bash);
        }
    }
}