import React from "react";
import List from "./List";
import InputField from "./InputField";

function GroceryList(props) {

    return (
        <div className="grocery-list">
            <header >
                <h2>Grocery List Items</h2>
                <InputField addProduct={props.addProduct} />
            </header>
            <div className="groceries">
                <List items={props.list} handleClick={props.handleClick} />
            </div>
        </div>
    )
}

export default GroceryList;