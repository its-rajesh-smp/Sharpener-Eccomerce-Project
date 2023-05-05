import React from 'react';
import "./DeliveryAddress.css"
import DeliveryAddressMain from '../UI/Delivery Address/Delivery Address/DeliveryAddressMain';
import EditDeliveryAddress from '../UI/Delivery Address/Edit Delivery Address/EditDeliveryAddress';
import { useState } from 'react';

function DeliveryAddress(props) {

    const [edit, setEdit] = useState(false)


    return (
        <div className=' DeliveryAddress-div '>

            {!edit && <DeliveryAddressMain setEdit={setEdit} />}
            {edit && <EditDeliveryAddress setEdit={setEdit} />}



        </div>
    );
}

export default DeliveryAddress;
