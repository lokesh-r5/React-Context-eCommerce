import React, { Component } from "react";
import { ProductConsumer } from "./context";
import { Link } from "react-router-dom";

export default class Product extends Component {
    render() {
        console.log(this.props.product)
        const { id, title, img, price, company, info, inCart, count, total } = this.props.product;
        return (
            <ProductConsumer>
                {value => {
                    return(
                        <div className="prduct-card">
                            <Link to="/product-details">
                                <h4 className="product-name"
                                    onClick={()=>{
                                        value.handleDetail(id);
                                    }}>
                                    {title}
                                </h4>
                            </Link>
                            <img src={img} alt={id} />
                            <div className="company">{company}</div>
                            <p className="price">{price}</p>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}