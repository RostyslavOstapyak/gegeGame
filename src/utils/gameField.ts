import {GameCell} from "./gameCell";
import {Player} from "./player";
import {Content} from "./content";


export class GameField {
    GameField: GameCell[][] = [];


    generateField(rowWidth: number, rowHeight: number) {
        for (let x = 0; x < rowWidth; x += 1) {
            const row: GameCell[] = []
            for (let y = 0; y < rowHeight; y += 1) {
                row.push(new GameCell(x, y))
            }
            this.GameField?.push(row);
        }
    }

    setPlayer(newPlayer: Player, oldPlayer: Player | void): GameCell[][] {
        const possibleLocation = this.GameField[newPlayer.x][newPlayer.y]

        if (possibleLocation.content === Content.empty || possibleLocation.content === Content.road) {
            possibleLocation.isPlayer = true;

            if (!oldPlayer) return this.GameField;
            this.GameField[oldPlayer.x][oldPlayer.y].isPlayer = false;
        }

        return this.GameField
    }

    fillField(player:Player){
        this.setPlayer(player)
        // should have some more methods to fill field with objects to interact with
    }

    updateField(){
        return this.GameField
    }


    // generateItem(content){}
    // should generate cell content if cell content provided

}