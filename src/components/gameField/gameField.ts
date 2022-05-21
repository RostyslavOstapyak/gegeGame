import {GameCell} from "../utils/gameCell";


export class GameField {
    GameField: [GameCell][];

    constructor(width: number, height: number) {
        this.GameField = this.generateField(width, height);
    }

    generateField(rowWidth: number, rowHeight: number): [GameCell][] {

        return this.generateColumn(rowWidth, rowHeight)
    }

    generateColumn(rowWidth: number, rowHeight: number) {
        const result: [GameCell][] = [this.generateRow(rowWidth, 1)];

        for (let i = 1; i < rowHeight; i++) {
            result.push(this.generateRow(rowWidth, i))
        }

        return result
    }

    generateRow(width: number, rowNumber: number): [GameCell] {
        const result: [GameCell] = [new GameCell(rowNumber, 0)];

        for (let i = 1; i < width; i++) {
            result.push(new GameCell(rowNumber, i))
        }

        return result;
    }

}