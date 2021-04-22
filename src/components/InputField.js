import React from "react";

function InputField(props) {

    return (
        <div>
            <input type="text" name="newProduct" />

            <button onClick={props.addProduct}>Add Item</button>
        </div>
    )
}

export default InputField;