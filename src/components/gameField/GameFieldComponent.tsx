import React, {useEffect} from 'react';
import FieldRow from "./FieldRow";
import './gameField.css';
import {useDispatch, useSelector} from "react-redux";
import {setBoardCreator, setFieldCreator} from "../../store/field/fieldActions";
import {errorSelector, fieldSelector, playerSelector} from "../../store/selector";
import {errorActionCreator, errorClearCreator} from "../../store/error/errorActions";
import {Item} from "../../utils/item";
import Dialog from "../dialog/Dialog";


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
        if (typeof field.movePlayer(e.keyCode) === "string") {
            dispatch(errorActionCreator(field.movePlayer(e.keyCode)))
        } else {
            dispatch(setFieldCreator(field));
        }
    }

    useEffect(() => {
        document.addEventListener("keyup", moveHandler)
        return () => document.removeEventListener("keyup", moveHandler);
    });

    const board = field.GameField
    const error = useSelector(errorSelector);

    const item = new Item(field)
    console.log(item)

    return (
        <div className="field">
            {board && board.map((rowItem, index) => <FieldRow key={index} row={rowItem}/>
            )}
            {error && <Dialog message={error} handlerAccept={errorClearCreator} handlerDismiss={undefined}/>}
        </div>
    );
};

export default GameFieldComponent;