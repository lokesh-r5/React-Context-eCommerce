import React, { Component } from "react";
import { ProductConsumer } from "./context";
import { Link } from "react-router-dom";

export default class ProductDetails extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const { id, title, img, price, company, info, inCart, count, total } = value.detailProduct;
                        console.log("++++")
                        console.log(value.detailProduct)
                        return (
                            <div className="prduct-card">
                                <h4 className="product-name">{title}</h4>
                                <img src={img} alt={id} />
                                <div className="company">{company}</div>
                                <p className="info">{info}</p>
                                <Link to="/">
                                    <button>Go to Products</button>
                                </Link>
                                <button disabled={inCart}
                                    onClick={() => {
                                        value.addToCart(id);
                                    }}>
                                        {inCart ? "In Cart" : "Add to Cart"}
                                </button>
                            </div>
                        );
                    }
                }
            </ProductConsumer>
        )
    }
}