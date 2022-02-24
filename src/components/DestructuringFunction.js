import React from "react";



//method one
//const DestructuringFunction = ({fname, lname}) => <h2>Hello {fname} and {lname}</h2>

//method two
const DestructuringFunction = props => {
    const {fname, lname} = props;
    return (
        <h2>Hello {fname} and {lname}</h2>
    )
}

export default DestructuringFunction