import React, { Component } from "react";
import { ProductConsumer } from "./context";

export default class CartItem extends Component {
    render() {
        const { id, title, name, img, price, company, info, count, total } = this.props.product;
        return (
            <ProductConsumer>
                {
                    value => {
                        return (
                            <div className="cart-item">
                                <img src={img} alt={name} /> 
                                <div className="product-name">{name}</div>
                                <div className="product-id">{id}</div>
                                <div className="product-count">
                                    <button className="decrement" onClick={() => {value.decrementCount(id)}}>-</button>
                                    {count}
                                    <button className="increment" onClick={() => {value.incrementCount(id)}}>+</button>
                                </div>
                                <div className="product-total">{total}</div>
                            </div>
                        );
                    }
                }
            </ProductConsumer>
        );
    }
}