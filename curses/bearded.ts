import { Curse } from "../curse";

export class Bearded {
    bearded = new Curse("Bearded", card => {
        card.absorb = [1, "magic"];
    });
}