import {Content} from "./content";

export enum Direction {
    up = 87,
    down = 83,
    left = 65,
    right = 68
}

export class Player {
    x: number;
    y: number;
    content: Content;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.content = Content.player;
    }

    movePlayer(key: Direction) {
        switch (key) {
            case Direction.up:
                this.y -= 1
                break;
            case Direction.down:
                this.y += 1
                break;
            case Direction.left:
                this.x -= 1
                break;
            case Direction.right : {
                this.x += 1
                break;
            }
            default:
                return
        }
    }
}