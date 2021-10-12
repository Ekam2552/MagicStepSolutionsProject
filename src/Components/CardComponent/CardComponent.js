import React from 'react';
import "./CardComponent.css";

export const CardComponent = ({ imageUrl, title, note }) => {
    return(
        <div className="CardContainer">
            <div className="imageContainer">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="titleContainer">
                {title}
            </div>
            <div className="noteContainer">
                {note}
            </div>
        </div>
    );
}