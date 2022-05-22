import React, {useEffect} from 'react';
import FieldRow from "./FieldRow";
import './gameField.css';
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
        player.movePlayer(e.keyCode)
        // if setPlayer have no error then dispatch new field
        // if (field.setPlayer(player).text) {
            dispatch(setFieldCreator(field));
        // } else {
            // dispatch(errorCreator(field.setPlayer(player).text))
        // }
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