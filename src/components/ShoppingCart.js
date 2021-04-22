import React from "react";
import List from "./List";

function ShoppingCart(props) {
    return (
        <div className="shoppingCart-list">
            <header>
                <h2>Shopping Cart</h2>
            </header>
            <button onClick={props.emptyCart}>Empty Shopping Cart</button>
            <div className="shopping-list">
                <List items={props.list} readonly={props.readonly} />
            </div>

        </div>
    )
}

export default ShoppingCart;