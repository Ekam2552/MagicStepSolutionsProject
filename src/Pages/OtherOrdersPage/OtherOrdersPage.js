import React from 'react';
import "./OtherOrdersPage.css";

export const OtherOrdersPage = () => {
    return(
        <div className="OtherOrdersPageContainer">
            <div className="OtherOrdersPageUpper">ORDER ID 656JH20210713</div>
            <div className="OtherOrdersPageLower">
                <div className="OtherOrdersPageLowerLeft">
                    <div className="OtherOrdersPageProductCardDiv"></div>
                    <div className="OtherOrdersPageStatusDiv">
                        <select className="OtherOrdersPageStatusCard">
                            <option value="Accepted">Accepted</option>
                            <option value="Packed">Packed</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Deliverd</option>
                            <option value="Canceled">Canceled</option>
                            <option value="Returned">Returned</option>
                        </select>
                    </div>
                </div>
                <div className="OtherOrdersPageLowerMiddle"></div>
                <div className="OtherOrdersPageLowerRight"></div>
            </div>
        </div>
    );
}