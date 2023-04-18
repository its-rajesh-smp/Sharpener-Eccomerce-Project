import React from 'react';
import "./ProductContainer.css"
import { productsArr } from "../../Data/data"
import Product from '../Product/Product';


function ProductContainer(props) {
    return (
        <div className='container'>
            <h3 className='ProductContainer-chatagorie'>Cloathings</h3>
            <div className=' ProductContainer-div '>


                {
                    productsArr.map((val) => {
                        return <Product key={val.id} details={{
                            name: val.name,
                            id: val.id,
                            price: val.price,
                            img: val.imageUrl
                        }} />
                    })
                }


            </div>
        </div>
    );
}

export default ProductContainer;
