import { Enemy } from "./enemy";
import { Player } from "./player";
import { Deck } from "./deck";

export class Game {
    name: string;
    enemy: Enemy;
    player: Player;
    deck: Deck;
    constructor(name: string, enemy: Enemy, player: Player, deck: Deck) {
        this.name = name;
        this.enemy = enemy;
        this.player = player;
        this.deck = deck;
    }
}