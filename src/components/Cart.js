import React, { Component } from "react";
import { ProductConsumer } from "./context";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

export default class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        if(value.cart.length === 0) {
                            return (
                                <React.Fragment>
                                    <h3>Cart</h3>
                                    <EmptyCart />
                                </React.Fragment>
                            );
                        } else {
                            return value.cart.map(product => {
                                return <CartItem key={product.id} product={product} />
                            });
                        }
                    }
                }
            </ProductConsumer>
        );
    }
}