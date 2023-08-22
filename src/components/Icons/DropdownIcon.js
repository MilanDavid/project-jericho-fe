import React from "react";
import PropTypes from 'prop-types';

const NextIcon = React.memo(({lightMode = false, disabled = false}) => {

    let color = '#041e42';

    if (lightMode) {
        color = '#FFF';
    }

    if (disabled) {
        color = '#63758c';
    }

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 25.16 25.17'
            width="29"
            height="30"
        >
        <g id='Layer_2' data-name='Layer 2'>
            <g id='Layer_1-2' data-name='Layer 1'>
                <line x1='18.11' y1='10.53' x2='12.01' y2='16.63' fill='none' stroke={color}
                strokeMiterlimit='10' strokeWidth='1.598' />
                <line x1='13.07' y1='16.64' x2='7.05' y2='10.62' fill='none' stroke={color}
                strokeMiterlimit='10' strokeWidth='1.598' />
                <path d='M12.58,1.6a11,11,0,1,1-11,11,11,11,0,0,1,11-11m0-1.6A12.59,12.59,0,1,0,25.16,12.58,12.58,12.58,0,0,0,12.58,0Z'
                fill={color} />
            </g>
        </g>
    </svg>
    );
});

NextIcon.propTypes = {
    lightMode: PropTypes.bool,
    disabled: PropTypes.bool
};

export default NextIcon;
