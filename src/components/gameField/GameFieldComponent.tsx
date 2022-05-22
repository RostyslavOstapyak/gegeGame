import React, {useEffect} from 'react';
import {GameField} from "../../utils/gameField";
import FieldRow from "./FieldRow";
import './gameField.css';
import {Player} from "../../utils/player";
import {useDispatch, useSelector} from "react-redux";
import {FIELD_SET, FIELD_SET_BOARD} from "../../store/fieldActions";
import {boardSelector, fieldSelector} from "../../store/selector";

const GameFieldComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const field: GameField = new GameField();
        field.generateField(10, 10);
        dispatch({type: FIELD_SET, payload: field});
        const player = new Player(1, 5);
        field.setPlayer(player)
        const board = field.updateField()
        dispatch({type: FIELD_SET_BOARD, payload: board})
    }, [])

    const board = useSelector(boardSelector)
    return (
        <div className="field">
            {board && board.map((rowItem, index) => <FieldRow key={index} row={rowItem}/>
            )}
        </div>
    );
};

export default GameFieldComponent;