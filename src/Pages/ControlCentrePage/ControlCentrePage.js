import React from 'react';
import "./ControlCentrePage.css";

import { Form } from 'react-bootstrap';

import { UpperCardComponent } from "../../Components/CardComponent/UpperCardComponent";
import { LowerCardComponent } from "../../Components/CardComponent/LowerCardComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faShare } from '@fortawesome/free-solid-svg-icons'

import businessShopImage from "../../assets/busuiness_shop.jpg";
import invoiceImage from "../../assets/invoice.svg";
import orderImage from "../../assets/order.svg";
import productImage from "../../assets/products.svg";
import analyticsImage from "../../assets/analytics.svg";
import bookKeepingImage from "../../assets/bookKeeping.svg";
import extraChargeImage from "../../assets/extraCharges.svg";
import shippingImage from "../../assets/shipping.svg";
import aboutStoreImage from "../../assets/aboutStore.svg";
import paymentImage from "../../assets/payment.svg";
import staffImage from "../../assets/staff.svg";

export const ControlCentrePage = () => {
    return(
        <div className="ControlCentrePageContainer">
            <div className="navbar">
                <div className="titleAndSubtitleDiv">
                    <div className="title">Lifestyle Fashion</div>
                    <div className="subtitle">NEW DEHLI,INDIA</div>
                </div>
                <div className="searchBarDiv">
                    <Form.Control type="text" placeholder="Search product" className="searchBar" />
                </div>
                <div className="iconsDiv">
                    <div className="bellIcon"><FontAwesomeIcon icon={faShare} /></div>
                    <div className="cartIcon"><FontAwesomeIcon icon={faBell} /></div>
                </div>
            </div>
            <div className="upperCardsContainer">
                <div class="container">
                    <div className="grid-item">
                        <UpperCardComponent 
                            imageUrl={invoiceImage}
                            title="Invoicing"
                            note=""
                        />
                    </div>
                    <div className="grid-item">
                        <UpperCardComponent 
                            imageUrl={orderImage}
                            title="Orders"
                            note="1 pending order"
                        />
                    </div>
                    <div className="grid-item">
                        <UpperCardComponent 
                            imageUrl={productImage}
                            title="Products"
                            note=""
                        />
                    </div>
                    <div className="grid-item">
                        <UpperCardComponent 
                            imageUrl={analyticsImage}
                            title="Analytics"
                            note=""
                        />
                    </div>
                    <div class="mainImage">
                        <img src={businessShopImage} alt='Business Shop' />
                    </div>
                </div>
            </div>
            <div className="manageYourBusinessheading">
                Manage Your Business
            </div>
            <div className="lowerCardsContainer">
                <LowerCardComponent imageUrl={bookKeepingImage} title="Book Keeping" note="" />
                <LowerCardComponent imageUrl={extraChargeImage} title="Extra Charge" note="" />
                <LowerCardComponent imageUrl={shippingImage} title="Shipping" note="" />
                <LowerCardComponent imageUrl={aboutStoreImage} title="About Store" note="" />
                <LowerCardComponent imageUrl={paymentImage} title="Payment" note="" />
                <LowerCardComponent imageUrl={staffImage} title="Staff" note="" />
            </div>
        </div>
    );
};