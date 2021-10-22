import React from 'react';
import "./UpperCardComponent.css";

export const UpperCardComponent = ({ imageUrl, title, note, widthGiven, heighGiven }) => {
    return(
        <div className="UpperCardContainer" style={{ width: `${widthGiven}`, height: `${heighGiven}` }}>
            <div className="UpperCardImageContainer">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="UpperCardTitleContainer">
                {title}
            </div>
            <div className="UpperCardNoteContainer">
                {note}
            </div>
        </div>
    );
}