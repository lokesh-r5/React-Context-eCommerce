import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data.js";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        storeProducts: [],
        detailProduct: detailProduct,
        cart: []
    }

    componentDidMount() {
        this.setProducts();
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                incrementCount: this.incrementCount,
                decrementCount: this.decrementCount
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }

    getProduct = (id) => {
        return this.state.storeProducts.find(product => product.id === id);
    }

    handleDetail = (id) => {
        const product = this.getProduct(id);
        this.setState(() => {
            return {detailProduct: product};
        });
    }

    addToCart = (id) => {
        const tempProducts = [...this.state.storeProducts];
        const index = tempProducts.indexOf(this.getProduct(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        this.setState(() => {
            return { 
                storeProducts: tempProducts,
                cart: [ ...this.state.cart, product]
            }
        });
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach((product)=>{
            tempProducts = [...tempProducts, product];
        })
        this.setState(()=>{
            return {storeProducts:tempProducts};
        });
    }

    incrementCount = (id) => {
        const tempProducts = [...this.state.storeProducts];
        const index = tempProducts.indexOf(this.getProduct(id));
        const product = tempProducts[index];
        product.count++;
        const tempCart = this.updateCart(id, product.count);
        this.setState(() => {
            return {
                storeProducts: tempProducts,
                cart: tempCart
            }
        });
    }

    decrementCount = (id) => {
        const tempProducts = [...this.state.storeProducts];
        const index = tempProducts.indexOf(this.getProduct(id));
        const product = tempProducts[index];
        product.count--;
        let tempCart = this.updateCart(id, product.count);
        if(!product.count) {
            console.log("remove it")
            tempCart = tempCart.filter(product => product.count > 0);
            product.inCart = false;
        }
        this.setState(() => {
            return {
                storeProducts: tempProducts,
                cart: tempCart
            }
        });
    }

    updateCart = (id, count) => {
        const tempCart = [...this.state.cart];
        const product = tempCart.find(product => product.id === id);
        product.count = count;
        return tempCart;
    }


}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };