import React, {FC} from 'react';
import './inventory.css'
import {inventoryCellInterface} from "../../utils/player";

interface propsInterface {
    item: inventoryCellInterface
}


const InventoryCell: FC<propsInterface> = ({item}) => {


    return (

        <div className="inventory__content" draggable={true}>
            {item.value && <div>
                <img
                    className="inventory__image"
                    src={item.value?.image}
                    alt={item.value?.name}/>
                <div className="inventory__description">
                    {/*<DescriptionPanel item={item.value}/>*/}
                </div>
            </div>}
        </div>
    );
};

export default InventoryCell;