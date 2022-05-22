import React, {FC, useEffect} from 'react';
import {GameField} from "../../utils/gameField";
import FieldRow from "./FieldRow";
import './gameField.css';
import {Direction, Player} from "../../utils/player";
import {useDispatch, useSelector} from "react-redux";
import {FIELD_SET, FIELD_SET_BOARD, setBoardCreator, setFieldCreator} from "../../store/fieldActions";
import {boardSelector, fieldSelector, playerSelector} from "../../store/selector";
import {PLAYER_SET_PLAYER, setPlayerCreator} from "../../store/playerActions";
import {logDOM} from "@testing-library/react";

interface propsInterface{
    player:Player
    field:GameField
}

const GameFieldComponent:FC<propsInterface> = ({player,field}) => {

    const dispatch = useDispatch();

    const moveHandler = (e: any) => {

        if (!player) return

        if (e.keyCode === 87) player.movePlayer(Direction.up);
        if (e.keyCode === 83) player.movePlayer(Direction.down);
        if (e.keyCode === 65) player.movePlayer(Direction.left);
        if (e.keyCode === 68) player.movePlayer(Direction.right);
        field.setPlayer(player)
        dispatch(setBoardCreator(field.updateField()))
    }

    useEffect(() => {
        document.addEventListener("keyup", (e) => moveHandler(e))
        return () => document.removeEventListener("keyup", moveHandler);
    }, []);


        const board = useSelector(boardSelector)

    return (
        <div className="field">
            {board && board.map((rowItem, index) => <FieldRow key={index} row={rowItem}/>
            )}
        </div>
    );
};

export default GameFieldComponent;