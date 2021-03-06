import React, {useEffect} from 'react';
import FieldRow from "./FieldRow";
import './gameField.css';
import {useDispatch, useSelector} from "react-redux";
import {setBoardCreator, setFieldCreator} from "../../store/field/fieldActions";
import {dialogMessageSelector, fieldSelector, playerSelector} from "../../store/selector";
import {errorActionCreator} from "../../store/error/errorActions";

import ErrorBanner from "../errorBanner/ErrorBanner";
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
        if (moveResult.isError || moveResult.isMessage) {
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
    const actionMessage = useSelector(dialogMessageSelector);

    return (
        <div className="field">
            {board && board.map((rowItem, index) => <FieldRow key={index} row={rowItem}/>
            )}
            {actionMessage.isError && <ErrorBanner text={actionMessage.message}/>}
            {actionMessage.isMessage && <Dialog/>}
        </div>
    );
};

export default GameFieldComponent;