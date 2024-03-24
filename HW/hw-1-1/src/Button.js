import React from "react";

export const Button = props => {
    return ( 
        <button onClick={props.onClickHandler} className={props.className}>
            {props.children}
        </button>
    );
}