import React, {useEffect} from 'react';
import './player.css'
import {Direction, Player} from "../../utils/player";

const PlayerComponent = () => {

    const moveHandler = (e: { key: string; }) => {
        if (e.key === "w") Player.movePlayer(Direction.up);
        if (e.key === "s") Player.movePlayer(Direction.down);
        if (e.key === "a") Player.movePlayer(Direction.left);
        if (e.key === "d") Player.movePlayer(Direction.right);

    }

    useEffect(() => {
        document.addEventListener("keypress", (e) => moveHandler(e))
        return document.removeEventListener("keypress", moveHandler);
    }, []);

    return (
        <div className="field__cell player"/>
    );
};

export default PlayerComponent;