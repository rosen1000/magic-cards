import { Spell } from "./spell";
import * as spells from "./spells/bash";

export class Class {
    name: string;
    spells: Array<Spell>;
    constructor (name: string) {
        this.name = name;
        switch (name) {
            case "Warrior":
                // this.spells[0] = "stab";
        }
    }
}