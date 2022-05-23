import React, {useEffect} from 'react';
import FieldRow from "./FieldRow";
import './gameField.css';
import {useDispatch, useSelector} from "react-redux";
import {setBoardCreator, setFieldCreator} from "../../store/field/fieldActions";
import {errorSelector, fieldSelector, playerSelector} from "../../store/selector";
import {errorActionCreator, errorClearCreator} from "../../store/error/errorActions";
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
        const moveResult = field.movePlayer(e.keyCode)
        console.log(moveResult)
        if (moveResult) {
            dispatch(errorActionCreator(moveResult))
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

    return (
        <div className="field">
            {board && board.map((rowItem, index) => <FieldRow key={index} row={rowItem}/>
            )}
            {error.message && <Dialog
                message={error.message}
                handlerAccept={errorClearCreator}
                handlerDismiss={undefined}
                item={error.value ? error.value : null}/>}
        </div>
    );
};

export default GameFieldComponent;