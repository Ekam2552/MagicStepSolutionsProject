import React, { useState } from 'react';
import "./BookKeepingCardComponent.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const BookKeepingCardComponent = ({ Name, Note, Price }) => {

    const [isGreen, setIsGreen] = useState(false);

    const toggleGreen = () => {
        setIsGreen(!isGreen)
    }

    return(
        <div className="BookKeepingCardComponentContainer">
            <div className="BookKeepingCardComponentContainerLeft"><FontAwesomeIcon icon={faUser} /></div>
            <div className="BookKeepingCardComponentContainerMiddle">
                <div className="BookKeepingCardComponentNameDiv">{Name}</div>
                <div className="BookKeepingCardComponentNoteDiv">{Note}</div>
            </div>
            <div className="BookKeepingCardComponentContainerRight">
                <div className={isGreen?"BookKeepingCardComponentPriceGreen":"BookKeepingCardComponentPriceRed"}>{`$${Price}`}</div>
                <div className="BookKeepingCardComponentAdvance" onClick={toggleGreen}>Advance</div>
            </div>
        </div>
    );
}