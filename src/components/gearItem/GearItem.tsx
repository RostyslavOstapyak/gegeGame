import React, {FC} from 'react';
import './gearItem.css'
import {Item} from "../../utils/item";

interface propsInterface {
    item: Item | null
}

const GearItem: FC<propsInterface> = ({item}) => {
    // implement item description on hover


    return (
        <div className="gear__item">
            {item && <>
                <img
                    className="inventory__image"
                    src={item.image}
                    alt={item.name}/>
                <div className="inventory__description">
                    {/*<DescriptionPanel item={item.value}/>*/}
                </div>
            </>}
        </div>
    );
};

export default GearItem;