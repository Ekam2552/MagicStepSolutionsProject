import React from 'react';
import "./LowerCardComponent.css";

export const LowerCardComponent = ({ imageUrl, title, note, widthGiven, heighGiven }) => {
    return(
        <div className="LowerCardContainer" style={{ width: `${widthGiven}`, height: `${heighGiven}` }}>
            <div className="LowerCardImageContainer">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="LowerCardTitleContainer">
                {title}
            </div>
            <div className="LowerCardNoteContainer">
                {note}
            </div>
        </div>
    );
}