import React, { useEffect} from 'react';
import FieldRow from "./FieldRow";
import './gameField.css';
import {Direction} from "../../utils/player";
import {useDispatch, useSelector} from "react-redux";
import {setBoardCreator, setFieldCreator} from "../../store/fieldActions";
import {fieldSelector, playerSelector} from "../../store/selector";


const GameFieldComponent = () => {

    const dispatch = useDispatch();

    const player = useSelector(playerSelector);
    const field = useSelector(fieldSelector);

    if (field.GameField.length === 0) {
        field.generateField()
        dispatch(setBoardCreator(field.updateField()))
    }
    if (!field.Player) field.setPlayer(player)

    const moveHandler = (e: any) => {

        if (!player) return
        if (e.keyCode === 87) player.movePlayer(Direction.up);
        if (e.keyCode === 83) player.movePlayer(Direction.down);
        if (e.keyCode === 65) player.movePlayer(Direction.left);
        if (e.keyCode === 68) player.movePlayer(Direction.right);
        field.setPlayer(player)
        dispatch(setFieldCreator(field))
    }

    useEffect(() => {
        document.addEventListener("keyup", moveHandler)
        return () => document.removeEventListener("keyup", moveHandler);
    }, []);

    const board = field.GameField

    return (
        <div className="field">
            {board && board.map((rowItem, index) => <FieldRow key={index} row={rowItem}/>
            )}
        </div>
    );
};

export default GameFieldComponent;