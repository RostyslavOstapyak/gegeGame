import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './dialog.css'
import {dialogMessageSelector} from "../../store/selector";
import {errorClearCreator} from "../../store/error/errorActions";


const Dialog = () => {
    const dispatch = useDispatch();
    const content = useSelector(dialogMessageSelector);
    const handlerDismiss = () => {
        dispatch(errorClearCreator());
    }

    const {message} = content

    return (
        <div className="dialog">
            <div className="dialog__field">
                <h3 className="dialog__content">{message}</h3>
                {/*{item.treasure && <div>*/}
                {/*    <span>{item.treasure.name}</span>*/}
                {/*    <br/>*/}
                {/*    <span>{item.treasure.properties.level}</span>*/}
                {/*    <br/>*/}
                {/*    <span>{item.treasure.properties.value} {item.treasure.properties.damage ? "dmg" : "arm"}</span>*/}
                {/*    <br/>*/}
                {/*</div>*/}
                {/*}*/}
                {/*<button className="dialog__button" onClick={() => dispatch(handlerAccept())}>Окау</button>*/}
                {/*{handlerDismiss &&*/}
                <button
                    className="dialog__button"
                    onClick={handlerDismiss}>Dismiss
                </button>
                {/*}*/}
            </div>
        </div>
    );
};

export default Dialog;