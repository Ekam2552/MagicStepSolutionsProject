import React from "react";
import "./TextAreaWithLabelComponent.css";

export const TextAreaWithLabel = ({ labelText, TextAreaHeight, placeholderText }) => {
    return(
        <div className="TextAreaWithLabelComponentContainer">
            <div className="LabelContainer">{labelText}</div>
            <div className="TextAreaContainer">
                <textarea className="TextArea" placeholder={placeholderText} style={{height:`${TextAreaHeight}rem`}} />
            </div>
        </div>
    );
}