import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "./context";

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>Product List</h3>
                <ProductConsumer>
                    {value => {
                        console.log(value)
                        return value.storeProducts.map(product => {
                            return <Product key={product.id} product={product} />;
                        });
                    }}
                </ProductConsumer>
            </React.Fragment>
        );
    }
} 