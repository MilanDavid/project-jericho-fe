import React from "react";
import PropTypes from 'prop-types';

const RALogo = React.memo(({ className = "", lightMode = false }) => {

    let textColor = '#041E42';

    if (lightMode) {
        textColor = '#fff';
    }

    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 106 47"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            className={className}
        >
            <g id="Symbols" fill="none" fillRule="evenodd">
                <g id="Nav" transform="translate(-135 -61)">
                    <g id="Group-17" transform="translate(135 60)">
                        <path
                            d="M96.5702,46.9169 C93.9462,46.9169 91.3962,46.9099 88.8462,46.9229 C88.2852,46.9249 88.3132,46.4679 88.1942,46.1509 C86.7782,42.3749 85.3542,38.6039 83.9922,34.8099 C83.7242,34.0629 83.4652,34.0439 82.8312,34.3759 C78.0432,36.8839 72.9302,38.0859 67.5322,38.0379 C66.8482,38.0319 66.5492,38.2479 66.3252,38.8849 C65.5662,41.0549 64.7342,43.1999 63.9372,45.3569 C63.3272,47.0049 63.3322,47.0069 61.4612,46.8629 C62.5502,43.9329 63.6312,41.0269 64.7502,38.0189 C62.7012,37.7759 60.7122,37.5389 58.7722,37.0309 C51.6382,35.1659 45.5692,31.6569 41.4162,25.4029 C38.3202,20.7399 36.9942,15.6029 38.5532,10.0829 C39.8342,5.5469 42.7702,2.4719 47.4602,1.2959 C47.7912,1.2129 48.2782,0.8329 48.5012,1.4239 C48.7022,1.9579 48.2032,2.0889 47.8532,2.2879 C46.1562,3.2519 45.3512,4.8419 44.9682,6.6479 C43.8052,12.1389 44.8672,17.2729 47.7982,21.9829 C51.9092,28.5919 57.8962,32.5879 65.4702,34.2809 C66.1872,34.4409 66.2382,34.0449 66.4062,33.5949 C68.9182,26.8679 71.4362,20.1439 73.9532,13.4179 C74.0292,13.2139 74.1102,13.0109 74.2652,12.6089 C74.7142,14.0129 75.2412,15.0749 74.6672,16.5379 C72.4242,22.2549 70.3692,28.0449 68.2092,33.7939 C67.9362,34.5209 68.0802,34.6959 68.8152,34.7249 C73.4932,34.9119 77.9822,34.1239 82.3002,32.2979 C83.0542,31.9789 82.7732,31.6009 82.6032,31.1449 C80.1382,24.5339 77.6792,17.9209 75.2022,11.3139 C75.0272,10.8459 75.0072,10.4429 75.1892,9.9699 C76.1962,7.3539 77.1712,4.7249 78.1672,2.1049 C78.3032,1.7479 78.3402,1.3299 78.9422,1.3319 C79.5252,1.3339 79.5852,1.6979 79.7282,2.0799 C82.8682,10.4219 86.0222,18.7599 89.1352,27.1119 C89.4262,27.8929 89.6172,27.8299 90.1692,27.3629 C93.4752,24.5639 96.2032,21.2689 98.6042,17.6839 C98.7762,17.4279 98.8232,16.9049 99.4182,17.2199 C99.9762,17.5159 99.8932,17.7649 99.6022,18.2169 C97.0602,22.1649 94.1612,25.8129 90.6432,28.9389 C90.1532,29.3749 90.1082,29.7109 90.3302,30.2959 C92.3732,35.6529 94.3822,41.0219 96.4012,46.3889 C96.4542,46.5299 96.4932,46.6759 96.5702,46.9169"
                            id="Fill-1"
                            fill={textColor}
                        />
                        <path
                            d="M19.2026,25.1703 C23.8806,32.4043 28.5316,39.5963 33.2656,46.9173 C30.2616,46.9173 27.4036,46.9133 24.5446,46.9223 C24.2356,46.9233 24.1016,46.7473 23.9626,46.5283 C19.4446,39.4263 14.9246,32.3253 10.4066,25.2223 C10.3756,25.1733 10.3756,25.1063 10.3546,25.0233 C11.2706,24.8583 12.1946,24.7393 13.0946,24.5223 C17.6906,23.4093 20.5126,20.0543 20.8606,15.3263 C20.9936,13.5213 20.9536,11.7253 20.4196,9.9793 C19.1606,5.8573 16.2196,3.6893 12.1146,2.9113 C11.4046,2.7763 10.6766,2.7223 9.9546,2.6633 C9.5246,2.6283 9.4586,2.3903 9.4666,2.0273 C9.4736,1.7103 9.4976,1.4963 9.9086,1.4843 C15.2066,1.3243 20.4626,1.5383 24.8786,4.9573 C30.0366,8.9523 30.2626,17.0513 25.4856,21.5103 C23.9406,22.9533 22.1556,23.9913 20.2016,24.7613 C19.8856,24.8853 19.5726,25.0183 19.2026,25.1703"
                            id="Fill-3"
                            fill={textColor}
                        />
                        <g id="Group-7" transform="translate(0 .722)">
                            <polygon
                                id="Clip-6"
                                points="0 0.639230174 8.185 0.639230174 8.185 46.3802868 0 46.3802868"
                            />
                            <path
                                d="M0.018,23.4113 C0.018,16.1123 0.029,8.8133 6.77626358e-21,1.5143 C-0.003,0.8043 0.166,0.6233 0.876,0.6403 C3.086,0.6913 5.299,0.6763 7.511,0.6463 C8.054,0.6383 8.185,0.8023 8.184,1.3303 C8.17,16.1183 8.17,30.9053 8.185,45.6933 C8.185,46.2293 8.04,46.3793 7.505,46.3713 C5.294,46.3423 3.081,46.3253 0.871,46.3793 C0.15,46.3963 -0.002,46.1973 0.001,45.4983 C0.029,38.1363 0.018,30.7733 0.018,23.4113"
                                id="Fill-5"
                                fill={textColor}
                            />
                        </g>
                        <g id="Group-10" transform="translate(33 22.722)">
                            <polygon
                                id="Clip-9"
                                points="0.231689765 0.90094816 27.4963619 0.90094816 27.4963619 25 0.231689765 25"
                            />
                            <path
                                d="M14.0331,25.0001 C8.0711,24.9541 3.0451,21.6181 1.0181,16.2211 C-0.9649,10.9381 0.9101,4.5401 5.4291,1.2021 C5.5981,1.0771 5.7851,0.7291 6.0321,1.0041 C6.1961,1.1871 6.4101,1.4441 6.2231,1.7701 C4.4201,4.9071 4.6451,8.1431 5.9681,11.3261 C7.3721,14.7061 9.9111,17.0631 13.2231,18.5691 C17.6941,20.6021 22.8141,20.0461 26.3511,16.2561 C26.6351,15.9531 26.9411,15.7141 27.3201,16.0021 C27.7441,16.3261 27.2861,16.6021 27.1601,16.8461 C25.1241,20.7821 22.1861,23.6311 17.7221,24.6351 C16.5761,24.8931 15.4161,24.9641 14.0331,25.0001"
                                id="Fill-8"
                                fill={textColor}
                            />
                        </g>
                        <g id="Group-13" transform="translate(49 .722)">
                            <polygon
                                id="Clip-12"
                                points="0.806342365 0.278 11.2153368 0.278 11.2153368 17.955253 0.806342365 17.955253"
                            />
                            <path
                                d="M11.2133,8.3063 C11.2303,11.3603 9.9183,13.5603 7.7303,15.3023 C6.1533,16.5573 4.3303,17.3253 2.4073,17.8723 C2.1493,17.9463 1.8603,18.0743 1.6713,17.7053 C1.4833,17.3433 1.6293,17.1443 1.9193,16.9273 C5.7223,14.0833 6.0743,7.9263 4.5523,4.6473 C3.8503,3.1363 2.8713,1.8993 1.2503,1.3243 C0.8603,1.1863 0.7973,0.9833 0.8073,0.6343 C0.8163,0.3263 0.9703,0.2713 1.2273,0.2783 C4.2333,0.3593 7.0653,0.9173 9.2523,3.2233 C10.6493,4.6973 11.2553,6.4713 11.2133,8.3063"
                                id="Fill-11"
                                fill={textColor}
                            />
                        </g>
                        <g id="Group-16" transform="translate(98 8.722)">
                            <polygon
                                id="Clip-15"
                                points="0.756944661 0.664474727 7.471 0.664474727 7.471 7.31661733 0.756944661 7.31661733"
                            />
                            <path
                                d="M4.0492,7.3165 C2.1372,7.3015 0.7352,5.8565 0.7572,3.9225 C0.7782,2.1055 2.2672,0.6575 4.1092,0.6645 C5.9882,0.6715 7.4922,2.1765 7.4712,4.0285 C7.4492,5.9065 5.9662,7.3315 4.0492,7.3165"
                                id="Fill-14"
                                fill="#14E8FF"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
});

RALogo.propTypes = {
    lightMode: PropTypes.bool
};

export default RALogo;