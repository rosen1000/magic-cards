export class Energy {
    private attack = "⚔";
    private defence = "🛡";
    private agility = "🌬";
    private willpower = "👁";
    symbol;
    value;
    constructor(type: number) {
        this.change(type);
    }
    change(type: number) {
        switch (type) {
            case 0:
                this.symbol = this.attack;
                this.value = "attack";
                break;
            case 1:
                this.symbol = this.defence;
                this.value = "defence";
                break;
            case 2:
                this.symbol = this.agility;
                this.value = "agility";
                break;
            case 3:
                this.symbol = this.willpower;
                this.value = "willpower"
                break;
            default:
                throw new Error("Type can be selected only from 0 to 3");
        }
    }
}