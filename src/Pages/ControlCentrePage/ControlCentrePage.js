import React from 'react';
import "./ControlCentrePage.css";

import { Form } from 'react-bootstrap';

import { UpperCardComponent } from "../../Components/CardComponent/UpperCardComponent";
import { LowerCardComponent } from "../../Components/CardComponent/LowerCardComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faShare } from '@fortawesome/free-solid-svg-icons'

import businessShopImage from "../../assets/busuiness_shop.jpg";
import invoiceImage from "../../assets/invoice.png";
import orderImage from "../../assets/order.png";
import productImage from "../../assets/products.png";
import analyticsImage from "../../assets/Analytics.png";
import bookKeepingImage from "../../assets/bookkeeping.png";
import extraChargeImage from "../../assets/extracharge.png";
import shippingImage from "../../assets/Shipping.png";
import aboutStoreImage from "../../assets/About Store.png";
import paymentImage from "../../assets/Payment.png";
import staffImage from "../../assets/Staff.png";

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