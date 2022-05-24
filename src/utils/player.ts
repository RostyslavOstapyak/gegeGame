import {Content} from "./content";
import {Item} from "./item";

export interface inventoryCellInterface {
    id: number
    value: Item | null
}

export class Player {
    x: number;
    y: number;
    content: Content;
    inventory: inventoryCellInterface[];
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


    addItemToInventory(item: any, position: number = 0) {
        if (position) {
            this.inventory[position].value = {...item.value}
            this.inventory[item.id].value = null
            return this
        }
        const {inventory} = this
        let possibleCell = inventory.find(cell => cell.value === null)

        if (possibleCell) {
            // @ts-ignore
            this.inventory[possibleCell.id].value = {...item}
        }
        return this
    }

    isInventorySlotFree(itemIndex: number) {
        return !this.inventory[itemIndex].value
    }

    private generateInventory(): inventoryCellInterface[] {
        const result = []

        for (let i = 0; i < 100; i++) {
            const emptyInventoryCell = {
                id: i,
                value: null
            }
            result.push(emptyInventoryCell)
        }
        return result
    }


}