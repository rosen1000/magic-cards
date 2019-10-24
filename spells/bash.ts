import { Spell } from "../spell";
import { game } from "../index";

let bash = new Spell("Bash", 0, 4, 0, null, (game, selected) => {
    if (selected < 0) throw new Error("Can't select negative roll");
    if (selected > 7) throw new Error("Can't exceed the maximum rolls");
    let card = game.deck.deck[selected][game.deck.deck[selected].length - 1];
});

export {bash as Bash};
// module.exports = {
//     name: "bash",
//     type: "attack",
//     cost: 4,
//     effect: function (game) {
//         //TODO
//     },
//     appears: "start",
//     require: null
// }