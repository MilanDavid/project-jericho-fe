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
            width="29"
            height="30"
            viewBox="0 0 29 30"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <polygon
                    id="path-1"
                    points="0 0.593 28.406 0.593 28.406 28.9998 0 28.9998"
                />
            </defs>
            <g id="Next-white" fill="none" fillRule="evenodd">
                <g id="Group-7">
                    <path
                        d="M6.5874,15.2544 L21.1544,15.2544"
                        id="Stroke-1"
                        stroke={color}
                        strokeWidth="2"
                    />
                    <path
                        d="M14.8169,8.9614 L21.7069,15.8504"
                        id="Stroke-2"
                        stroke={color}
                        strokeWidth="2"
                    />
                    <path
                        d="M21.7114,14.6577 L14.9244,21.4457"
                        id="Stroke-3"
                        stroke={color}
                        strokeWidth="2"
                    />
                    <g id="Group-6" transform="translate(0 .407)">
                        <path
                            d="M14.2036,0.5928 C6.3586,0.5928 -0.0004,6.9518 -0.0004,14.7968 C-0.0004,22.6408 6.3586,28.9998 14.2036,28.9998 C22.0476,28.9998 28.4066,22.6408 28.4066,14.7968 C28.4066,6.9518 22.0476,0.5928 14.2036,0.5928 M14.2036,2.3978 C21.0406,2.3978 26.6026,7.9598 26.6026,14.7968 C26.6026,21.6338 21.0406,27.1968 14.2036,27.1968 C7.3656,27.1968 1.8046,21.6338 1.8046,14.7968 C1.8046,7.9598 7.3656,2.3978 14.2036,2.3978"
                            id="Fill-4"
                            fill={color}
                        />
                    </g>
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
