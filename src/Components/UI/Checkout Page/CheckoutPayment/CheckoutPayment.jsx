
import React from 'react';
import "./CheckoutPayment.css"
import CheckoutContainerNav from '../CheckoutContainerNav/CheckoutContainerNav';
import { TextField } from '@mui/material';

function CheckoutPayment(props) {
    return (
        <div className=' CheckoutPayment-div '>
            <CheckoutContainerNav for="PAYMENT OPTIONS" step="3" />


            {props.showField === 3 &&
                <>

                    <div style={{ width: "300px" }}>
                        <div>
                            <TextField
                                label="Enter Card Number"
                                id="filled-size-small"
                                variant="filled"
                                size="small"
                                fullWidth={true}
                            />
                        </div>

                        <div>
                            <TextField
                                label="CVV"
                                id="filled-size-small"
                                variant="filled"
                                size="small"
                                style={{ width: "100px" }}
                            />

                            <TextField style={{ width: "100px" }} label="MM" id="filled-size-small" variant="filled" size="small" />
                            <TextField style={{ width: "100px" }} label="YY" id="filled-size-small" variant="filled" size="small" />
                        </div>
                    </div>
                    <button className='paymentBtn'>PAY <span>2500</span></button>

                </>}
        </div>
    );
}

export default CheckoutPayment;