import React from 'react';
import PropTypes from 'prop-types';
import '~/components/Footer/Footer.scss';
import Logo from '~/components/Icons/RALogo.js';

const Footer = React.memo(({socials, disclaimers}) => (
    <div className="footer pb-5 pt-5">
        <div className="container pb-5 pt-5">

            <div className="row">

                <div className="col-lg-2 offset-lg-0 pr-lg-5 col-2 offset-5">
                    <Logo lightMode={true}/>
                </div>

                <div className="col-lg-8 col-12">
                    <div className="footer-disclaimers mt-2">
                        {disclaimers.map((disc, id) => (
                            <p
                                className="text-center mb-2"
                                key={`footer-disc-${id}`}>
                                {disc}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="col-lg-2 col-12">
                    <ul className="list-inline footer-socials text-center mt-2 pt-2">
                        {socials.map((social, key) => (
                            <li key={key} className="list-inline-item">
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`footer-social-icon ${social.type}`}
                                ></a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    </div>
));

Footer.propTypes = {
    socials: PropTypes.Array,
    disclaimers: PropTypes.Array
};

export default Footer;
