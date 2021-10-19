import React from 'react';
import "./AddDetailsPage.css";

import { TextAreaWithLabel } from "../../Components/TextAreaWithLabelComponent/TextAreaWithLabelComponent";

import { Button as ReactButton } from "react-bootstrap";

export const AddDetailsPage = () => {
    return(
        <div className="AddDetailsPageContainer">
            <div className="AddDetailsPageTitleDiv">Add Details</div>
            <div className="AddDetailsPageAboutDiv"><TextAreaWithLabel labelText="About" TextAreaHeight="6" placeholderText="Help users to know more about your business" /></div>
            <div className="AddDetailsPageReturnPolicyDiv"><TextAreaWithLabel labelText="Return Policy" TextAreaHeight="8" placeholderText="Mention about your return policy in details" /></div>
            <div className="AddDetailsPageSubmitButtonDiv">
                <ReactButton variant="success" className="AddDetailsPageSubmitButton">Submit</ReactButton>
            </div>
        </div>
    );
}