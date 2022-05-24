import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './dialog.css'
import {dialogMessageSelector, playerSelector} from "../../store/selector";
import {errorClearCreator} from "../../store/error/errorActions";
import {setPlayerCreator} from "../../store/player/playerActions";


const Dialog = () => {
    const dispatch = useDispatch();
    const content = useSelector(dialogMessageSelector);
    const player = useSelector(playerSelector)

    const handlerDismiss = () => {
        dispatch(errorClearCreator());
    }
    const handlerAccept = () => {
        if (content.payload.treasure.name) {

            const updatedPlayer = player.addItemToInventory(content.payload.treasure);
            dispatch(setPlayerCreator(updatedPlayer));
        }
        dispatch(errorClearCreator());
    }


    const item = content.payload ? content.payload.treasure : null
    const message = content.message

    return (
        <div className="dialog">
            <div className="dialog__field">
                <h3 className="dialog__content">{message}</h3>
                {Boolean(item) && <div>
                    {item.img &&
                        <img
                            src={`../../assets/${item.name}.jpg`}
                            alt={`${item.name}`}/>}
                    <span>{item.name}</span>
                    <br/>
                    <span>{item.properties.level}</span>
                    <br/>
                    <span>
                        {item.properties.value} {item.properties.damage ? "dmg" : "armor"}
                    </span>
                    <br/>
                </div>
                }
                <div className="dialog__buttons-wrapper">
                    {Boolean(item) && <button className="dialog__button" onClick={handlerAccept}>Accept Item</button>}

                    <button
                        className="dialog__button"
                        onClick={handlerDismiss}>Dismiss
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;