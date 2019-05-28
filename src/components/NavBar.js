import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>Navbar</h3>
                <Link to="/">
                    Go Home
                </Link>
                <Link to="/cart">
                    Go to Cart
                </Link>
            </React.Fragment>
        );
    }
}