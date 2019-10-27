import { Trait } from "../traits";

export class Beard {
    beard = new Trait("Beard", game => {
        game.deck.deck[Math.floor(Math.random() * game.deck.deck.length)]
    });
}