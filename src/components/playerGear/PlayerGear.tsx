import React from 'react';
import './playerGear.css'
import {useSelector} from "react-redux";
import {playerSelector} from "../../store/selector";
import GearItem from "../gearItem/GearItem";

const PlayerGear = () => {
    const player = useSelector(playerSelector);
    return (
        <div className="player-gear">
            <div className="gear__cell head">
                <GearItem item={player.head}/>
            </div>
            <div className="gear__cell armor">
                <GearItem item={player.armor}/>
            </div>
            <div className="gear__cell weapon">
                <GearItem item={player.weapon}/>
            </div>
            <div className="gear__cell secondary">
                <GearItem item={player.secondary}/>
            </div>
            <div className="gear__cell boots">
                <GearItem item={player.boots}/>
            </div>
        </div>
    );
};

export default PlayerGear;