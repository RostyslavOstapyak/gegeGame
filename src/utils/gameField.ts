import {GameCell} from "./gameCell";
import {initialPlayer, Player} from "./player";
import {Content} from "./content";
import {Enemy} from "./enemy";

export enum Direction {
    up = 87,
    down = 83,
    left = 65,
    right = 68
}

export enum actionResult {
    tree = "Ви знайшли дерево :)",
    rock = "Ви не можете взаємодіяти з цим обєктом :(",
    worldEdge = "Ви добрались до края світу :)",
    enemy = "Ви перемогли ворога, отримайте винагороду!",
    empty = "",
}

export interface actionResultInterface {
    message: actionResult
    isError: boolean
    isMessage: boolean
    payload: any
}

export class GameField {
    GameField: GameCell[][] = [];
    // @ts-ignore
    Player: Player;
    enemies: Enemy[] = [];
    level: number = 1;

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

    movePlayer(key: number): actionResultInterface {
        const playerCopy = JSON.parse(JSON.stringify(this.Player))
        const result = {
            message: actionResult.empty,
            isError: false,
            isMessage: false,
            payload: undefined
        }


        if (key === Direction.up) playerCopy.y -= 1
        if (key === Direction.down) playerCopy.y += 1
        if (key === Direction.left) playerCopy.x -= 1
        if (key === Direction.right) playerCopy.x += 1

        // world edge
        if (playerCopy.x < 0
            || playerCopy.x >= this.GameField.length
            || playerCopy.y < 0
            || playerCopy.y >= this.GameField.length) {
            result.message = actionResult.worldEdge
            result.isMessage = true;
            return result
        }

        const possibleLocation: GameCell = this.GameField[playerCopy.x][playerCopy.y]
        const currentPlayerPosition = this.GameField[this.Player?.x][this.Player?.y]

        if (possibleLocation.content === Content.empty || possibleLocation.content === Content.road) {
            currentPlayerPosition.isPlayer = false;
            possibleLocation.isPlayer = true;
            this.Player = JSON.parse(JSON.stringify(playerCopy))
        }
        // tree
        if (possibleLocation.content === Content.tree) {
            result.message = actionResult.tree
            result.isMessage = true
        }
        // rock
        if (possibleLocation.content === Content.rock) {
            result.message = actionResult.rock
            result.isMessage = true
        }
        // enemy
        if (possibleLocation.content === Content.enemy) {
            result.isMessage = true // for now after implementing battle fix this
            result.message = actionResult.enemy
            // @ts-ignore
            result.payload = this.enemyInteraction(possibleLocation)
        }

        this.setPlayer(this.Player)
        return result
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
        if (field) {
            this.GameField = JSON.parse(JSON.stringify(field.GameField));
            this.Player = JSON.parse(JSON.stringify(field.Player))
            this.enemies = JSON.parse(JSON.stringify(field.enemies))
        }

        return this
    }

    generateEnemies(gameArea: number) {
        // 20 is number of enemies on map: lover number to increase enemies number on map
        const enemiesNumber = gameArea / 20

        for (let i = 0; i < enemiesNumber; i++) {

            const generateEnemy = () => {
                const randomPosition = () => Math.floor(Math.random() * (this.GameField.length));
                const newEnemy = new Enemy(randomPosition(), randomPosition(), this)
                if (this.GameField[newEnemy.x][newEnemy.y].content !== Content.empty) generateEnemy()
                return newEnemy
            }
            const createdEnemy = generateEnemy()
            this.GameField[createdEnemy.x][createdEnemy.y].content = Content.enemy
            this.enemies.push(createdEnemy)

        }
    }

    enemyInteraction(location: GameCell): Enemy | undefined {
        this.GameField[location.x][location.y].content = Content.empty
        this.updateField()
        return this.enemies.find(enemy => enemy.x === location.x && enemy.y === location.y)
    }
}