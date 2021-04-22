import React from "react";
import ListItem from "./ListItem";

function List(props) {

    const list = Array.from(props.items).map(item => {
        return <ListItem
            key={item.id}
            item={item}
            handleClick={props.handleClick}
            readonly={props.readonly}
        />
    })

    return (
        <ul className="list">
            {list}
        </ul>
    )
}

export default List;