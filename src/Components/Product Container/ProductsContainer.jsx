import React from 'react';
import "./ProductContainer.css"
import Product from '../Product/Product';
import { useContext } from 'react';
import AllProductContext from '../../Context/AllProductCTX';


function ProductContainer(props) {

    const allProductCTX = useContext(AllProductContext)


    return (
        <div className='ProductContainer_container'>
            <h3 className='ProductContainer-chatagorie'>Cloathings</h3>
            <div className=' ProductContainer-div '>
                {
                    allProductCTX.allProductArray.map((val) => {
                        return <Product key={val.id} details={{
                            name: val.name,
                            id: val.id,
                            price: val.price,
                            imageUrl: val.imageUrl,
                            quantity: val.quantity
                        }} />
                    })
                }
            </div>
        </div>

    );
}

export default ProductContainer;
