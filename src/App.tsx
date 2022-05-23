import React, {useEffect, useState} from 'react';
import './App.css';
import GameFieldComponent from "./components/gameField/GameFieldComponent";
import Inventory from "./components/inventory/Inventory";


function App() {
    const [isInventory, setIsInventory] = useState(false);

    const openInventoryHandler = (e: any) => {
        if (e.keyCode === 73) setIsInventory(!isInventory)
    }

    useEffect(() => {
        document.addEventListener("keyup", openInventoryHandler)
        return () => document.removeEventListener("keyup", openInventoryHandler)
    })
    return (
        <div className="App">
            {/*<Interface/>*/}
            <GameFieldComponent/>
            {isInventory && <Inventory onClose={setIsInventory}/>}
        </div>
    );
}

export default App;
