import React, { useState } from 'react';
import "./OtherOrdersPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMapMarkerAlt, faTruckMoving } from '@fortawesome/free-solid-svg-icons';

import ProductImage from "../../assets/RedIphone.png";

import Select from 'react-select';

export const OtherOrdersPage = () => {

    const statusOptions = [
        {
            value: 1,
            label: "Accepted"
        },
        {
            value: 2,
            label: "Packed"
        },
        {
            value: 3,
            label: "Shipped"
        },
        {
            value: 4,
            label: "Delivered"
        },
        {
            value: 5,
            label: "Canceled"
        },
        {
            value: 6,
            label: "Returned"
        }
    ];

    const [selectedValue, setSelectedValue] = useState(0);

    const handleChange = e => {
        setSelectedValue(e.value);
    }

    return(
        <div className="OtherOrdersPageContainer">
            <div className="OtherOrdersPageUpper">ORDER ID 656JH20210713</div>
            <div className="OtherOrdersPageLower">
                <div className="OtherOrdersPageLowerLeft">
                    <div className="OtherOrdersPageProductCardDiv">
                        <div className="OtherOrdersPageProductCardImageDiv">
                            <img className="OtherOrdersPageProductCardImage" src={ProductImage} alt="Product" />
                        </div>
                        <div className="OtherOrdersPageProductCardInformationDiv">
                            <div className="OtherOrdersPageProductCardInformationHeading">Apple Iphone 12</div>
                            <div className="OtherOrdersPageProductCardInformationColor">Red</div>
                            <div className="OtherOrdersPageProductCardInformationQuantityDiv">
                                <div className="OtherOrdersPageProductCardInformationQuantityHeading">Quantity</div>
                                <div className="OtherOrdersPageProductCardInformationQuantity">1</div>
                            </div>
                        </div>
                    </div>
                    <div className="OtherOrdersPageStatusDiv">
                        <Select 
                            className="OtherOrdersPageStatusCard"
                            value={statusOptions.find(obj => obj.value === selectedValue)}
                            placeholder="Select Status"
                            options={statusOptions}
                            onChange={handleChange}
                            />
                    </div>
                </div>
                <div className="OtherOrdersPageLowerMiddle"></div>
                <div className="OtherOrdersPageLowerRight">
                    <div className="OtherOrdersPageBuyerInformation">
                        <div className="OtherOrdersPageOrderTypeDiv">
                            <div className="OtherOrdersPageOrderTypeHeadingDiv">Order Type</div>
                            <div className="OtherOrdersPageOrderTypeInformationDiv">
                                <div className="OtherOrdersPageOrderTypeIconDiv">
                                    <FontAwesomeIcon icon={faTruckMoving} />
                                </div>
                                <div className="OtherOrdersPageOrderTypeText">Home Delivery</div>
                            </div>
                        </div>
                        <div className="OtherOrdersPageBuyerInformationDividingLine"></div>
                        <div className="OtherOrdersPageBuyerAddressDiv">
                            <div className="OtherOrdersPageBuyerAddressInformationDiv">
                                <div className="OtherOrdersPageBuyerAddressMapMarkerIconDiv">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                </div>
                                <div className="OtherOrdersPageBuyerAddressTextDiv">
                                    <div className="OtherOrdersPageBuyerAddressHeading">Delivery Address</div>
                                    <div className="OtherOrdersPageBuyerAddresseeName">Mriganka Baruah</div>
                                    <div className="OtherOrdersPageBuyerAddressLines">House No 15</div>
                                    <div className="OtherOrdersPageBuyerAddressLines">Near Greenland</div>
                                    <div className="OtherOrdersPageBuyerAddressLines">North lakhimpur</div>
                                    <div className="OtherOrdersPageBuyerAddressLines">Assam</div>
                                    <div className="OtherOrdersPageBuyerAddressLines">India</div>
                                    <div className="OtherOrdersPageBuyerAddresseePhoneNumber">+911234567890</div>
                                </div>
                            </div>
                            <div className="OtherOrdersPageBuyerAddressDetailsButtonDiv">
                                <button className="OtherOrdersPageBuyerAddressDetailsButton">Details</button>
                            </div>
                        </div>
                        <div className="OtherOrdersPageBuyerInformationDividingLine"></div>
                        <div className="OtherOrdersPagePaymentMethod">
                            <div className="OtherOrdersPagePaymentMethodHeading">Payment Method</div>
                            <div className="OtherOrdersPagePaymentMethodCardInformation">
                                <div className="OtherOrdersPagePaymentMethodCardIcon">
                                    <FontAwesomeIcon icon={faCreditCard} />
                                </div>
                                <div className="OtherOrdersPagePaymentMethodCardNumber">**** **** **** 4321</div>
                            </div>
                            <div className="OtherOrdersPagePaymentMethodOrderDetailsHeading">Order Details</div>
                            <div className="OtherOrdersPagePaymentMethodSubtotalDiv">
                                <div className="OtherOrdersPagePaymentMethodSubtotalCostHeading">Subtotal</div>
                                <div className="OtherOrdersPagePaymentMethodSubtotalCost">$999</div>
                            </div>
                            <div className="OtherOrdersPagePaymentMethodShippingCostDiv">
                                <div className="OtherOrdersPagePaymentMethodShippingCostHeading">Shipping Cost</div>
                                <div className="OtherOrdersPagePaymentMethodShippingCost">$49</div>
                            </div>
                            <div className="OtherOrdersPagePaymentMethodTotalCostDiv">
                                <div className="OtherOrdersPagePaymentMethodTotalCostHeading">Total</div>
                                <div className="OtherOrdersPagePaymentMethodTotalCost">$1048</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}