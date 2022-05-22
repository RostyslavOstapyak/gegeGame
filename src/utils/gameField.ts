import {GameCell} from "./gameCell";
import {Player} from "./player";
import {Content} from "./content";

interface errorInterface {
    text: string
}

export class GameField {
    GameField: GameCell[][] = [];
    // @ts-ignore
    Player: Player;


    generateField(rowWidth: number = 10, rowHeight: number = 10) {
        this.GameField = []
        for (let x = 0; x < rowWidth; x += 1) {
            const row: GameCell[] = []
            for (let y = 0; y < rowHeight; y += 1) {
                row.push(new GameCell(x, y))
            }
            this.GameField?.push(row);
        }
        this.fillField();
        return this.GameField
    }

    setPlayer(player: Player): errorInterface | GameCell[][] {
        if (!this.Player) this.Player = JSON.parse(JSON.stringify(player));
        console.log(player)
        const possibleLocation = this.GameField[player.x][player.y]
        const currentPlayerPosition = this.GameField[this.Player?.x][this.Player?.y]

        if (possibleLocation.content === Content.empty || possibleLocation.content === Content.road) {
            currentPlayerPosition.isPlayer = false;
            possibleLocation.isPlayer = true;
            this.Player = JSON.parse(JSON.stringify(player))
        }


        if (possibleLocation.content === Content.tree) return ({text: "Ти не можеш ходити по деревах :("})
        if (possibleLocation.content === Content.rock) return ({text: "Не можна взаємодіяти з цим обєктом"})


        return this.GameField
    }


    private fillField() {
        // should have some more methods to fill field with objects to interact with

        const gameArea = this.GameField.length * this.GameField[1].length
        // there should be not more than 10% of field with rocks
        const rockNumber = gameArea / 10
        // rocks mint have treasure inside
        for (let i = 0; i < rockNumber; i++) {
            const randomPosition = () => Math.floor(Math.random() * (this.GameField.length));
            const newRock = {
                x: randomPosition(),
                y: randomPosition(),
                isTreasure: false,
                id: i,
            }
            // check if cell is free
            if (this.GameField[newRock.x][newRock.y].content === Content.empty)
                this.GameField[newRock.x][newRock.y].content = Content.rock
        }

        // there should be not more than 10% of field with threes
        const treesNumber = gameArea / 10
        for (let i = 0; i < treesNumber; i++) {
            const randomPosition = () => Math.floor(Math.random() * (this.GameField.length));
            const newTree = {
                x: randomPosition(),
                y: randomPosition(),
                isTreasure: false,
                id: i,
            }
            if (this.GameField[newTree.x][newTree.y].content === Content.empty)
                this.GameField[newTree.x][newTree.y].content = Content.tree
        }

    }


    updateField() {
        return this.GameField
    }


    // generateItem(content){}
    // should generate cell content if cell content provided

}