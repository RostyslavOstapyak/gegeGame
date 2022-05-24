import React, {Dispatch, FC, SetStateAction} from 'react';
import './inventory.css'
import PlayerGear from "../playerGear/PlayerGear";
import {useDispatch, useSelector} from "react-redux";
import {playerSelector} from "../../store/selector";
import InventoryCell from "./InventoryCell";
import {inventoryCellInterface} from "../../utils/player";
import {setPlayerCreator} from "../../store/player/playerActions";

interface propsInterface {
    onClose: Dispatch<SetStateAction<boolean>>
}

let currentItem: any;

const Inventory: FC<propsInterface> = ({onClose}) => {


    const player = useSelector(playerSelector)
    const inventory = player.inventory
    const dispatch = useDispatch();

    const dragStartHandler = (item: inventoryCellInterface) => {
        currentItem = item;
    }

    const dropHandler = (item: inventoryCellInterface) => {
        if (!currentItem) return
        if (player.isInventorySlotFree(item.id)) {
            const updatedPlayer = player.changeItemSlot(currentItem, item.id)
            dispatch(setPlayerCreator(updatedPlayer))
        }
        currentItem = null;
    }

    const dragOverHandler = (e: any) => {
        e.preventDefault()
    }

    return (
        <div className="inventory__field">
            <button
                className="close btn"
                onClick={() => onClose(false)}
            >
                X
            </button>
            <div className="inventory">
                <ul className="inventory__list">
                    {/*// @ts-ignore*/}
                    {inventory.map(el =>
                        <li
                            key={el.id}
                            className="inventory__cell"

                            onDragStart={() => {
                                dragStartHandler(el)
                            }}
                            onDragOver={dragOverHandler}
                            onDrop={(e) => {
                                e.preventDefault()
                                dropHandler(el)
                            }}>
                            <InventoryCell key={el.id} item={el}/>
                        </li>)}
                </ul>
                <div className="inventory__trash"/>
                <PlayerGear/>
            </div>
        </div>
    );
};

export default Inventory;