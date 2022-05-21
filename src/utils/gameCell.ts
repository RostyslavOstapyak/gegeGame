import {Content} from "./content";

export class GameCell {
    x: number;
    y: number;
    content: Content;
    isPlayer: boolean;

    constructor(x: number, y: number, content = Content.empty, isPlayer = false) {
        this.x = x;
        this.y = y;
        this.content = content
        this.isPlayer = isPlayer
    }
}