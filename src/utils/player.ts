import {Content} from "./content";


export class Player {
    x: number;
    y: number;
    content: Content;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = x;
        this.content = Content.player;
    }

}