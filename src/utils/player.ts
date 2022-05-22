import {Content} from "./content";

export enum Direction {
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}

export class Player {
    x: number;
    y: number;
    content: Content;
    static y: number;
    static x: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.content = Content.player;
    }

    movePlayer(direction: Direction) {
        switch (direction) {
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