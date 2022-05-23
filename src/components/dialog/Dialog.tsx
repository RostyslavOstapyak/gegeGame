import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import './dialog.css'

interface popsInterface {
    message: string
    handlerAccept: any
    handlerDismiss: any | undefined
}

const Dialog: FC<popsInterface> = ({message, handlerAccept, handlerDismiss}) => {
    const dispatch = useDispatch();

    return (
        <div className="dialog">
            <div className="dialog__field">
                <h3 className="dialog__content">{message}</h3>
                <button className="dialog__button" onClick={() => dispatch(handlerAccept())}>Окау</button>
                {handlerDismiss &&
                    <button className="dialog__button" onClick={() => dispatch(handlerDismiss())}>Dismiss</button>}
            </div>
        </div>
    );
};

export default Dialog;