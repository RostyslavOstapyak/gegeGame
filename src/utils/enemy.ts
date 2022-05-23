import {Content} from "./content";

export interface treasureInterface {

}

export class Enemy {
    x: number;
    y: number;
    content: Content;
    treasure: treasureInterface;
    id: number;


    constructor(x: number, y: number,) {
        this.x = x;
        this.y = y;
        this.content = Content.enemy;
        this.treasure = this.generateTreasure
        this.id = Math.random()
    }

    private generateTreasure() {
        return {}
    }
}