import React, { useState } from 'react';
import "./BookKeepingPage.css";

import { Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BookKeepingCardComponent } from "../../Components/BookKeepingCardComponent/BookKeepingCardComponent";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const BookKeepingPage = () => {

    const [customerMenu, setCustomerMenu] = useState(true);
    const [supplierMenu, setSupplierMenu] = useState(false);

    const toggleCustomerMenu = () => {
        if(supplierMenu && !customerMenu)
        {
            setCustomerMenu(!customerMenu);
            setSupplierMenu(false);
        }
    }

    const toggleSupplierMenu = () => {
        if(customerMenu && !supplierMenu)
        {
            setSupplierMenu(!supplierMenu);
            setCustomerMenu(false);
        }
    }

    return(
        <div className="BookKeepingPageContainer">
            <div className="BookKeepingLeft">
                <div className="BookKeepingLeftUpper">
                    <div className="BookKeepingCustomerAndSupplierDiv">
                        <div className="BookKeepingCustomerDiv">
                            <div className={customerMenu?"BookKeepingActiveDiv":"BookKeepingCustomerInactiveDiv"} onClick={toggleCustomerMenu}>Customer</div>
                            <div className={customerMenu?"BookKeepingActiveLine":"BookKeepingCustomerInactiveLine"} />
                        </div>
                        <div className="BookKeepingSupplierDiv">
                            <div className={supplierMenu?"BookKeepingActiveDiv":"BookKeepingCustomerInactiveDiv"} onClick={toggleSupplierMenu}>Supplier</div>
                            <div className={supplierMenu?"BookKeepingActiveLine":"BookKeepingCustomerInactiveLine"} />
                        </div>
                    </div>
                </div>
                <div className="BookKeepingLeftLower">
                    <div className="BookKeepingCardComponentListDiv">
                        <BookKeepingCardComponent Name="Rajat Kumar" Note="$100 added on 2nd May, 2021" Price="999" />
                        <BookKeepingCardComponent Name="Rajat Kumar" Note="$100 added on 2nd May, 2021" Price="999" />
                    </div>
                    <div className="BookKeepingPlusIconDiv">
                        <div className="BookKeepingPlusIconCircle">
                            <FontAwesomeIcon icon={faPlus} className="BookKeepingPlusIcon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="BookKeepingRight">
                <div className="BookKeepingRightUpper">
                    <div className="BookKeepingSearchBarDiv">
                        <Form.Control type="text" placeholder="Search" className="BookKeepingSearchBar" />
                    </div>
                </div>
                <div className="BookKeepingRightLower"></div>
            </div>
        </div>
    );
}