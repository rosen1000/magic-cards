import { Game } from "./game";

export class Trait {
    name: string;
    run: Function;
    constructor(name: string, run: (game: Game) =>  void) {
        this.name = name;
        this.run = run;
    }
}