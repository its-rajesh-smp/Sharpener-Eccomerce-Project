import React from "react";
import "./ProductDetailsPageData.css";
import ProductReviewContainer from "../../Product Review Container/ProductReviewContainer";
import ReviewStars from "../Product Review Container/Review Stars/ReviewStars";


function ProductDetailsPageData(props) {
    return (
        <div className=" ProductDetailsPageData-div ">
            <h1 className="ProductDetailsPageData_productName">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, facere.
            </h1>

            <ReviewStars />

            <p className="ProductDetailsPageData_productRating">
                <span style={{ fontWeight: 700 }}>1,479</span> Ratings & <span style={{ fontWeight: 700 }}>208</span> Reviews
            </p>
            <h1 className="ProductDetailsPageData_productPrice">
                ₹<span>43995</span>
            </h1>

            <div className="ProductDetailsPageData_productDescription">
                <p style={{ fontWeight: 700 }}>Description</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, iure
                    qui beatae ea reprehenderit molestiae, doloribus exercitationem
                    accusamus aut odit numquam sit at modi quo harum repellat? Voluptas,
                    porro voluptate.
                </p>
            </div>

            <div className="ProductDetailsPageData_productSpecification">
                <p style={{ fontWeight: 700 }}>Specification</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, a.
                </p>
            </div>



            <ProductReviewContainer />
        </div>
    );
}

export default ProductDetailsPageData;
