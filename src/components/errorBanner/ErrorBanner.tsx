import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {errorClearCreator} from "../../store/error/errorActions";
import '../dialog/dialog.css';

interface propsInterface {
    text: string
}

const ErrorBanner: FC<propsInterface> = ({text}) => {
    const dispatch = useDispatch();

    const dismissHandler = () => {
        dispatch(errorClearCreator())
    }
    return (
        <div className="dialog">
            <div className="dialog__field">
                <h3 className="dialog__content">{text}</h3>
                <button className="error btn" onClick={dismissHandler}>Dismiss</button>
            </div>

        </div>
    );
};

export default ErrorBanner;