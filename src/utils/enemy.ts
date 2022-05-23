import {Content} from "./content";
import {Item} from "./item";
import {GameField} from "./gameField";


export class Enemy {
    x: number;
    y: number;
    level: number;
    content: Content;
    treasure: Item | number;
    id: number;


    constructor(x: number, y: number, field: GameField) {
        this.x = x;
        this.y = y;
        this.level = field.level
        this.content = Content.enemy;
        this.treasure = this.generateTreasure()
        this.id = Math.random()
    }

    private generateTreasure(): Item | number {
        if (Math.random() * 2 > 1) return new Item(this.level)
        return 0
    }

}