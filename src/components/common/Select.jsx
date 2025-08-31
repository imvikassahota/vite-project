import React from "react";

const Select = ({children, ...otherObjects}) =>{
    return(
        <select {...otherObjects}>
            {children}
        </select>
    );
}

export default Select;