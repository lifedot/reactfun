import React from 'react';

const Greeter = (props) => {
    return (
        <>
            <h1>
                Hey, {props.name}, what is your saying: {props.phrase}!
            </h1>
           
        </>
    );
}

export default Greeter;