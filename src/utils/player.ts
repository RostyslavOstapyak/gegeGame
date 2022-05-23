import {Content} from "./content";
import {Item} from "./item";


export class Player {
    x: number;
    y: number;
    content: Content;
    inventory: Item[];
    head: Item | null;
    armor: Item | null;
    boots: Item | null;
    weapon: Item | null;
    secondary: Item | null;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = x;
        this.content = Content.player;
        this.inventory = this.generateInventory()
        this.head = null;
        this.armor = null;
        this.weapon = null; //replace with broken sword after creation one
        this.secondary = null;
        this.boots = null;
    }

    private generateInventory(): Item[] {
        return []
    }

}