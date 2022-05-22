import React, {useEffect} from 'react';
import './App.css';
import GameFieldComponent from "./components/gameField/GameFieldComponent";

import {setBoardCreator} from "./store/fieldActions";
import {useDispatch, useSelector} from "react-redux";
import {fieldSelector, playerSelector} from "./store/selector";




function App() {

    const dispatch = useDispatch();
    const player = useSelector(playerSelector);
    const field = useSelector(fieldSelector);

    useEffect(() => {
        field.generateField()
        field.setPlayer(player)
        dispatch(setBoardCreator(field.updateField()))
    }, [])

    return (
        <div className="App">
            <GameFieldComponent player={player} field={field}/>
        </div>
    );
}

export default App;
