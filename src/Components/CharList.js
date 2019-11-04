import React from 'react';

const CharList = (props) => {
    const CharListStyle = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center',
    };
    return (
        <div style={CharListStyle} onClick={props.clicked}>
            {props.listItem}
        </div>
    );
}
export default CharList;