import {Content} from "./content";

export class GameCell {
    x: number;
    y: number;
    content: Content;
    isPlayer: boolean;
    contentValue: any;

    constructor(x: number, y: number, content = Content.empty, isPlayer = false, contentValue: any = null) {
        this.x = x;
        this.y = y;
        this.content = content
        this.isPlayer = isPlayer
        this.contentValue = contentValue
    }
}