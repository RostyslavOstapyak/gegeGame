import React, {FC} from 'react';
import {GameCell} from "../utils/gameCell";
import './fieldCell.css';

interface propsInterface {
    cell: GameCell
}

const FieldCell: FC<propsInterface> = ({cell}) => {
    console.log(cell)
    return (
        <div className="field__cell">

        </div>
    );
};

export default FieldCell;