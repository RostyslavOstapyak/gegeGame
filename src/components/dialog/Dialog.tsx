import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import './dialog.css'

interface popsInterface {
    message: string
    handlerAccept: any
    handlerDismiss: any | undefined
    item: any
}

const Dialog: FC<popsInterface> = ({message, handlerAccept, handlerDismiss, item = null}) => {
    const dispatch = useDispatch();
    console.log(item.treasure)
    return (
        <div className="dialog">
            <div className="dialog__field">
                <h3 className="dialog__content">{message}</h3>
                {item.treasure && <div>
                    <span>{item.treasure.name}</span>
                    <br/>
                    <span>{item.treasure.properties.level}</span>
                    <br/>
                    <span>{item.treasure.properties.value} {item.treasure.properties.damage ? "dmg" : "arm"}</span>
                    <br/>
                </div>
                }
                <button className="dialog__button" onClick={() => dispatch(handlerAccept())}>Окау</button>
                {handlerDismiss &&
                    <button className="dialog__button" onClick={() => dispatch(handlerDismiss())}>Dismiss</button>}
            </div>
        </div>
    );
};

export default Dialog;