import React from 'react';
import './playerGear.css'
import {useDispatch, useSelector} from "react-redux";
import {dragItemSelector, playerSelector} from "../../store/selector";
import GearItem from "../gearItem/GearItem";
import {setPlayerCreator} from "../../store/player/playerActions";

const PlayerGear = () => {
    const player = useSelector(playerSelector);
    const dragItem = useSelector(dragItemSelector);
    const dispatch = useDispatch();

    const dragOverHandler = (e: any) => {
        e.preventDefault()
    }

    const onDropHandler = (e: any) => {
        const gearSlotName: string = e.target.closest(".gear__cell").classList.value.split(' ').filter((item: string) => item !== "gear__cell")[0]

        const updatedPlayer = player.setGear({gearSlotName, dragItem})
        dispatch(setPlayerCreator(updatedPlayer))
    }

    return (
        <div className="player-gear">
            <div
                className="gear__cell head"
                onDragOver={dragOverHandler}
                onDrop={onDropHandler}
            >
                <GearItem item={player.head}/>
            </div>
            <div
                className="gear__cell armor"
                onDragOver={dragOverHandler}
                onDrop={onDropHandler}
            >
                <GearItem item={player.armor}/>
            </div>
            <div
                className="gear__cell weapon"
                onDragOver={dragOverHandler}
                onDrop={onDropHandler}
            >
                <GearItem item={player.weapon}/>
            </div>
            <div
                className="gear__cell secondary"
                onDragOver={dragOverHandler}
                onDrop={onDropHandler}
            >
                <GearItem item={player.secondary}/>
            </div>
            <div
                className="gear__cell boots"
                onDragOver={dragOverHandler}
                onDrop={onDropHandler}
            >
                <GearItem item={player.boots}/>
            </div>
        </div>
    );
};

export default PlayerGear;