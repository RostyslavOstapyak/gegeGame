import React, {FC} from 'react';
import './gearItem.css'
import {Item} from "../../utils/item";

interface propsInterface {
    item: Item | null
}

const GearItem: FC<propsInterface> = ({item}) => {
    // implement item description on hover
    return (
        <div className="gear__item"/>
    );
};

export default GearItem;