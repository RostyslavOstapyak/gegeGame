import React, {useEffect} from 'react';
import {GameField} from "../../utils/gameField";
import FieldRow from "./FieldRow";
import './gameField.css';
import {Player} from "../../utils/player";
import {useDispatch, useSelector} from "react-redux";
import {FIELD_SET} from "../../store/fieldActions";
import {fieldSelector} from "../../store/selector";

const GameFieldComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const field: GameField = new GameField();
        field.generateField(10, 10);
        dispatch({type: FIELD_SET, payload: field});
    }, [])

    const field = useSelector(fieldSelector)
    return (
        <div className="field">
            {field && field.GameField?.map((rowItem, index) => <FieldRow key={index} row={rowItem}/>
            )}
        </div>
    );
};

export default GameFieldComponent;