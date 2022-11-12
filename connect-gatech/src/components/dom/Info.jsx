import React from 'react';

function Info(props) {
    return (
        <div className="note">
            <h1>{props.name}</h1>
            <h3 font-size="12px">{props.year}</h3>
            <h3>{props.major}</h3>
        </div>
    )
}

export default Info;