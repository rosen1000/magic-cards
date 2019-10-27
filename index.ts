import { Game } from "./game";
import { Enemy } from "./enemy";
import { Player } from "./player";
import { Deck } from "./deck";
import { Class } from "./class";
import { Beard } from "./traits/beard"
let game = new Game("game", new Enemy("birb", [new Beard().beard]), new Player(10, "rosen1000", new Class("Warrior")), new Deck(5, 3));
game.name = "1";
export { game };