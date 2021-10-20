import React from 'react';
import "./AddDetailsPage.css";

import { Button as ReactButton } from "react-bootstrap";

export const AddDetailsPage = () => {
    return(
        <div className="AddDetailsPageContainer">
            <div className="AddDetailsPageTitleDiv">Add Details</div>
            <div className="AddDetailsPageAboutDiv">
                <div className="AddDetailsPageAboutHeadingDiv">About</div>
                <div className="AddDetailsPageAboutTextAreaDiv">
                    <textarea className="AddDetailsPageAboutTextArea" placeholder="Help users to know more about your business" />
                </div>
            </div>
            <div className="AddDetailsPageReturnPolicyDiv">
                <div className="AddDetailsPageReturnPolicyHeadingDiv">Return Policy</div>
                <div className="AddDetailsPageReturnPolicyTextAreaDiv">
                    <textarea className="AddDetailsPageReturnPolicyTextArea" placeholder="Mention about your return policy in details" />
                </div>
            </div>
            <div className="AddDetailsPageSubmitButtonDiv">
                <ReactButton variant="success" className="AddDetailsPageSubmitButton">Submit</ReactButton>
            </div>
        </div>
    );
}