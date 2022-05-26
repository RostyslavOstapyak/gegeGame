import {Content} from "./content";
import {baseWeapon, Item} from "./item";

export interface inventoryCellInterface {
    id: number
    value: Item | null
}

interface playerInterface {
    x: number;
    y: number;
    content: Content;
    inventory: inventoryCellInterface[];
    head: Item | null;
    armor: Item | null;
    boots: Item | null;
    weapon: Item | null;
    secondary: Item | null;
}

interface gearConfigInterface {
    gearSlotName: string
    dragItem?: inventoryCellInterface | null
}

interface statsInterface {
    currentHp: number
    maxHp: number
    physicalDamage: number
    elementalDamage: number
    armour: number
    elementalDefence: number
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
    stats: statsInterface

    constructor(playerData?: playerInterface | undefined) {

        this.x = 5;
        this.y = 5;
        this.content = Content.player;
        this.inventory = this.generateInventory()
        this.head = null;
        this.armor = null;
        this.weapon = null; //replace with broken sword after creation one
        this.secondary = null;
        this.boots = null;
        this.stats = this.calcStats()

        if (playerData) {
            const {inventory, head, armor, weapon, secondary, boots} = playerData
            this.content = Content.player;
            this.inventory = JSON.parse(JSON.stringify(inventory))
            this.head = head
            this.armor = armor
            this.weapon = weapon
            this.secondary = secondary
            this.boots = boots
        }

    }


    addItemToInventory(item: Item) {

        const {inventory} = this
        let possibleCell = inventory.find(cell => cell.value === null)

        if (possibleCell) {
            this.inventory[possibleCell.id].value = new Item(item)
        }
        // add error if no cells found
        return this
    }

    changeItemSlot(item: inventoryCellInterface, position: number) {
        if (item.value) {
            this.inventory[position].value = new Item(item.value)
            this.inventory[item.id].value = null
        }
        return this
    }

    isInventorySlotFree(itemIndex: number) {
        return !this.inventory[itemIndex].value
    }

    private generateInventory(): inventoryCellInterface[] {
        const result: inventoryCellInterface[] = [{id: 0, value: baseWeapon}]

        for (let i = 1; i < 99; i++) {
            const emptyInventoryCell = {
                id: i,
                value: null
            }
            result.push(emptyInventoryCell)
        }
        return result
    }

    setGear(gearConfig: gearConfigInterface) {
        if (!gearConfig.dragItem) return this
        const {gearSlotName, dragItem} = gearConfig
        if (gearSlotName === dragItem.value!.slot) {
            // @ts-ignore
            this[gearSlotName] = new Item(dragItem.value);
            this.inventory[dragItem.id].value = null
        }
        return this
    }

    calcStats(): statsInterface {

        return {
            currentHp: 0,
            maxHp: 100,
            physicalDamage: 0,
            elementalDamage: 0,
            armour: 0,
            elementalDefence: 0,
        }
    }
}

export const initialPlayer = new Player()