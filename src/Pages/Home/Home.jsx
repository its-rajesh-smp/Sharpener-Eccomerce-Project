import React from 'react';
import "./Home.css"
import PrimaryHeader from '../../Components/Header/PrimaryHeader';
import ProductContainer from '../../Components/Product Container/ProductsContainer';

function Home(props) {
    return (
        <div className=' Home-div '>
            <PrimaryHeader />

            <ProductContainer />


        </div>
    );
}

export default Home;
