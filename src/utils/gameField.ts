import {GameCell} from "./gameCell";
import {Player} from "./player";
import {Content} from "./content";
import {initialPlayer} from "./initialPlayer";
import {Enemy} from "./enemy";

export enum Direction {
    up = 87,
    down = 83,
    left = 65,
    right = 68
}

export class GameField {
    GameField: GameCell[][] = [];
    // @ts-ignore
    Player: Player;
    enemies: Enemy[] = [];

    generateField(rowWidth: number = 11, rowHeight: number = 11) {
        this.GameField = []
        for (let x = 0; x < rowWidth; x += 1) {
            const row: GameCell[] = []
            for (let y = 0; y < rowHeight; y += 1) {
                row.push(new GameCell(x, y))
            }
            this.GameField?.push(row);
        }
        this.fillField();
        this.setPlayer(initialPlayer);
        return this.GameField
    }

    setPlayer(player: Player): GameCell[][] {
        if (!this.Player) this.Player = JSON.parse(JSON.stringify(player));
        this.GameField[this.Player.x][this.Player.y].isPlayer = true;
        return this.GameField
    }

    movePlayer(key: number): GameCell[][] | string {
        const playerCopy = JSON.parse(JSON.stringify(this.Player))

        if (key === Direction.up) playerCopy.y -= 1
        if (key === Direction.down) playerCopy.y += 1
        if (key === Direction.left) playerCopy.x -= 1
        if (key === Direction.right) playerCopy.x += 1

        if (playerCopy.x < 0 || playerCopy.x >= this.GameField.length) return "Ой хто це у нас випав за край світу? :("
        if (playerCopy.y < 0 || playerCopy.y >= this.GameField.length) return "Ой хто це у нас випав за край світу? :("

        const possibleLocation = this.GameField[playerCopy.x][playerCopy.y]
        const currentPlayerPosition = this.GameField[this.Player?.x][this.Player?.y]

        if (possibleLocation.content === Content.empty || possibleLocation.content === Content.road) {
            currentPlayerPosition.isPlayer = false;
            possibleLocation.isPlayer = true;
            this.Player = JSON.parse(JSON.stringify(playerCopy))
        }

        if (possibleLocation.content === Content.tree) return "Ти не можеш ходити по деревах :("
        if (possibleLocation.content === Content.rock) return "Не можна взаємодіяти з цим обєктом"
        if (possibleLocation.content === Content.enemy) return "Enemy found ddddddddd"

        this.setPlayer(this.Player)
        return this.updateField()


    }

    private fillField() {
        // should have some more methods to fill field with objects to interact with
        const gameArea = this.GameField.length * this.GameField[1].length

        this.generateTrees(gameArea)
        this.generateRocks(gameArea)
        this.generateEnemies(gameArea)
    }

    private generateTrees(gameArea: number) {
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

    private generateRocks(gameArea: number) {
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
    }

    updateField(field: GameField | void) {
        if (field) this.GameField = JSON.parse(JSON.stringify(field.GameField));
        if (field) this.Player = JSON.parse(JSON.stringify(field.Player))


        return this.GameField
    }

    generateEnemies(gameArea: number) {
        // 20 is number of enemies on map: lover number to increase enemies number on map
        const enemiesNumber = gameArea / 20

        for (let i = 0; i < enemiesNumber; i++) {
            const randomPosition = () => Math.floor(Math.random() * (this.GameField.length));
            const newEnemy = new Enemy(randomPosition(), randomPosition())
            // check if cell is free
            if (this.GameField[newEnemy.x][newEnemy.y].content === Content.empty) {
                this.GameField[newEnemy.x][newEnemy.y].content = Content.enemy
                this.enemies.push(newEnemy)
            }
        }
    }
}