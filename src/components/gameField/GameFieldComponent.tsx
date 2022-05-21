import React from 'react';
import {GameField} from "./gameField";
import FieldRow from "../fieldRow/FieldRow";
import {GameCell} from "../utils/gameCell";
import './gameField.css';

const gameField: [GameCell][] = new GameField(10, 10).GameField;

const GameFieldComponent = () => {

    return (
        <div className="field">
            {gameField.map((rowItem, index) => <FieldRow key={index} row={rowItem}/>
            )}
        </div>
    );
};

export default GameFieldComponent;