import {GameCell} from "./gameCell";
import {Player} from "./player";
import {Content} from "./content";


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

    setPlayer(player: Player): GameCell[][] {
        if (!this.Player) this.Player = JSON.parse(JSON.stringify(player));

        const possibleLocation = this.GameField[player.x][player.y]
        const currentPlayerPosition = this.GameField[this.Player?.x][this.Player?.y]

        if (possibleLocation.content === Content.empty || possibleLocation.content === Content.road) {
            currentPlayerPosition.isPlayer = false;
            possibleLocation.isPlayer = true;
            this.Player = JSON.parse(JSON.stringify(player))
        }

        return this.GameField
    }


    private fillField() {
        // should have some more methods to fill field with objects to interact with
        // there should be not more than 10% of field with rocks
        const gameArea = this.GameField.length * this.GameField[1].length
        // there should be not more than 10% of field with rocks
        const rockNumber = gameArea/10
        // rocks mint have treasure inside
        for (let i = 0; i < rockNumber; i++) {
            const randomPosition =()=> Math.floor(Math.random() * (this.GameField.length ));
            const newRock = {
                x:randomPosition(),
                y:randomPosition(),
                isTreasure:false,
                id:i,
            }
            console.log(this.GameField)
            console.log(newRock)
            this.GameField[newRock.x][newRock.y].content = Content.rock
        }

    }


    updateField() {
        return this.GameField
    }


    // generateItem(content){}
    // should generate cell content if cell content provided

}