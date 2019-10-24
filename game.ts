import { Enemy } from "./enemy";
import { Player } from "./player";
import { Deck } from "./deck";

export class Game {
    name: string;
    enemy: Enemy;
    player: Player;
    deck: Deck;
}