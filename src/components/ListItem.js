import React from "react";

function ListItem(props) {

    const amount = " amount:" + " " + props.item.amount;

    return (
        <li
            id={props.item.id}
            className="list-item"
            value={props.item.title}
            onClick={() => props.handleClick(props.item.id)}
        >   <span>
                {props.item.title}
            </span>
            <span>
                {props.readonly ? amount : null}
            </span>
        </li>
    )
}

export default ListItem;