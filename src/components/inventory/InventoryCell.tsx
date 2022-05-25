import React, {FC} from 'react';
import './inventory.css'
import {inventoryCellInterface} from "../../utils/player";
import GearItem from "../gearItem/GearItem";

interface propsInterface {
    item: inventoryCellInterface
}


const InventoryCell: FC<propsInterface> = ({item}) => {


    return (

        <div className="inventory__content" draggable={true}>
            {item.value && <div>
                <GearItem item={item.value}/>
            </div>}
        </div>
    );
};

export default InventoryCell;