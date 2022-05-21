import React, {FC} from 'react';
import {GameCell} from "../../utils/gameCell";
import './fieldCell.css';
import {Content} from "../../utils/content";
import PlayerComponent from "../player/PlayerComponent";

interface propsInterface {
    cell: GameCell
}

const FieldCell: FC<propsInterface> = ({cell}) => {

    if (cell.content === Content.player) return <PlayerComponent/>

    return (
        <div className="field__cell">
            x:{cell.x}
            y:{cell.y}
        </div>

    );
};

export default FieldCell;