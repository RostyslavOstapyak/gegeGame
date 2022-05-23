import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {errorClearCreator} from "../../store/error/errorActions";
import './errorPopup.css';

interface propsInterface {
    text: string
}

const ErrorPopup: FC<propsInterface> = ({text}) => {
    const dispatch = useDispatch();

    return (
        <div className="error">
            <div className="error__field">
                <h3 className="error__content">{text}</h3>
                <button className="error__button" onClick={() => dispatch(errorClearCreator())}>Окау :(</button>
            </div>
        </div>
    );
};

export default ErrorPopup;