import React, {Dispatch, FC, SetStateAction} from 'react';
import './inventory.css'
import PlayerGear from "../playerGear/PlayerGear";

interface propsInterface {
    onClose: Dispatch<SetStateAction<boolean>>
}

const Inventory: FC<propsInterface> = ({onClose}) => {
    // should get player.inventory [] items


    return (
        <div className="inventory__field">
            <button
                className="close btn"
                // @ts-ignore
                onClick={() => onClose(false)}
            >
                X
            </button>
            <div className="inventory">
                <ul className="inventory__list">
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                    <li className="inventory__cell"></li>
                </ul>
                <PlayerGear/>
            </div>
        </div>
    );
};

export default Inventory;