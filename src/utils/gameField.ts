import {GameCell} from "./gameCell";
import {Player} from "./player";
import {Content} from "./content";


export class GameField {
    GameField: GameCell[][] = [];
    // @ts-ignore
    Player: Player ;


    generateField(rowWidth: number = 10, rowHeight: number = 10) {
        this.GameField = []
        for (let x = 0; x < rowWidth; x += 1) {
            const row: GameCell[] = []
            for (let y = 0; y < rowHeight; y += 1) {
                row.push(new GameCell(x, y))
            }
            this.GameField?.push(row);
        }
        return this.GameField
    }

    setPlayer(player: Player): GameCell[][] {
        // if field have no player find empty space for player

        // перевірити чи є збережени плеєр
        // якщо не збережено то це перша ітерація і треба зберегти переданого плеєра
        // якщо є вже плеєр це його стара позиція
        // обновоити позицію
        // стерти плеєра в старій позиції
        // обновити плеєра в обєкті

        if (!this.Player) this.Player = player;


        // if player place is no playable (taken with another object) no move for that position

        const possibleLocation = this.GameField[player.x][player.y]
        const currentPlayerPosition = this.GameField[this.Player?.x][this.Player?.y]

        if (possibleLocation.content === Content.empty || possibleLocation.content === Content.road) {
            currentPlayerPosition.isPlayer = false;
            possibleLocation.isPlayer = true;
        }

        return this.GameField
    }

    // fillField(player: Player) {
    //     this.setPlayer(player)
    //     // should have some more methods to fill field with objects to interact with
    // }

    updateField() {
        return this.GameField
    }


    // generateItem(content){}
    // should generate cell content if cell content provided

}