import React, {FC} from 'react';
import {GameCell} from "../../utils/gameCell";
import FieldCell from "../fieldCell/FieldCell";

interface propsInterface {
    row: GameCell[]
}

const FieldRow: FC<propsInterface> = ({row}) => {

    return (
        <div className="field__row">
            {row.map((cellItem, index) => <FieldCell key={index} cell={cellItem}/>)}
        </div>
    );
};

export default FieldRow;