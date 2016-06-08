import React from 'react';

export default props => {
    const {xlink, fillColor, ...other} = props;
    return (
        <svg {...other}>
            <use xlinkHref={'#' + xlink} style={{fill: fillColor}} />
        </svg>
    )
}
