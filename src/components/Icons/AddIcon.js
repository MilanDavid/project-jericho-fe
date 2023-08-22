import React from "react";

const AddIcon = React.memo((props) => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g id="Symbols" fill="none" fillRule="evenodd">
            <g id="Add-to-Basket" transform="translate(-341 -5)">
                <g id="Group-4">
                    <g id="Add-to-Basket" transform="translate(341 1)">
                        <g id="Add-Icon" transform="translate(0 4)">
                            <circle
                                id="Oval"
                                stroke="#041E42"
                                cx="9"
                                cy="9"
                                r="8"
                            />
                            <polygon
                                id="add"
                                fill="#041E42"
                                points="13.9472656 9.19726562 9.69726562 9.19726562 9.69726562 13.4472656 8.30273438 13.4472656 8.30273438 9.19726562 4.05273438 9.19726562 4.05273438 7.80273438 8.30273438 7.80273438 8.30273438 3.55273438 9.69726562 3.55273438 9.69726562 7.80273438 13.9472656 7.80273438"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
));


export default AddIcon;
