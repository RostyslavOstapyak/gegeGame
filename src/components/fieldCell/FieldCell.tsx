import React, {FC} from 'react';
import {GameCell} from "../../utils/gameCell";
import './fieldCell.css';
import {Content} from "../../utils/content";
import PlayerComponent from "../player/PlayerComponent";
import Grass from "../grass/Grass";
import Rock from "../rock/Rock";

interface propsInterface {
    cell: GameCell
}

const FieldCell: FC<propsInterface> = ({cell}) => {


    return (
        <div className="field__cell">
            {cell.isPlayer && <PlayerComponent/>}
            {cell.content === Content.rock && <Rock/>}
            {cell.content === Content.empty && <Grass/>}
        </div>
    );
};

export default FieldCell;