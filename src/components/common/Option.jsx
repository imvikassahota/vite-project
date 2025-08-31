import React from "react";

const Option = ({children, ...otherValues}) => {
    return (
        <option {...otherValues}>
            {children}
        </option>
    )
}

export default Option;