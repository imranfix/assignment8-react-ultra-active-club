import React from 'react';

const Cards = (props) => {
    const {time} = props;

    return (
        <div>
            <h2>time: {time}</h2>
        </div>
    );
};

export default Cards;