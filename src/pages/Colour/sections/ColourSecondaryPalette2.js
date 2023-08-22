import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const ColourSecondaryPalette = React.memo(() => (
    <div className="dark-section">
        <div className="container big-spacing">
            <Anim className="row">
                <div className="col-sm-5">
                    <h2 className="display-2">
                        Secondary Palette<span className="text-highlight">.</span>
                    </h2>
                    <p className="display-3">
                        Golf is a diverse and exciting sport, and the best way to represent that culture is to use a
                        diverse and vibrant palette ourselves.</p>
                </div>
                <div className="col-sm-6 offset-sm-1">
                    <p>This allows our communications to embrace a more modern, colourful language adding energy and
                        dynamism.</p>
                    <p>Make sure to use the colour values outlined here. Whenever a print process is used that can be
                        controlled our Pantone colours are used at 100% opacity.</p>
                </div>
            </Anim>

            <Anim className="row pt-4 pt-sm-5 secondary-palette-items">
                <div className="col-6 col-sm secondary-palette-item secondary-palette-item--light-blue mx-1">
                    <p className="secondary-palette-item-title">R&A Light Blue</p>
                    <p className="secondary-palette-item-content">
                        RGB 020 232 255<br/>
                        H186 S92 B100<br/>
                        HEX 14E8FF
                    </p>
                </div>
                <div className="col-6 col-sm secondary-palette-item secondary-palette-item--lilac mx-1">
                    <p className="secondary-palette-item-title">R&A Lilac</p>
                    <p className="secondary-palette-item-content">
                        RGB 166 147 255<br/>
                        H251 S42 B100<br/>
                        HEX A593FF
                    </p>
                </div>
                <div className="col-6 col-sm secondary-palette-item secondary-palette-item--teal mx-1">
                    <p className="secondary-palette-item-title">R&A Teal</p>
                    <p className="secondary-palette-item-content">
                        RGB 057 255 196<br/>
                        H162 S78 B100<br/>
                        HEX 39FFC4
                    </p>
                </div>
                <div className="col-6 col-sm secondary-palette-item secondary-palette-item--orange mx-1">
                    <p className="secondary-palette-item-title">R&A Orange</p>
                    <p className="secondary-palette-item-content">
                        RGB 255 088 054<br/>
                        H9 S77 B100<br/>
                        HEX FF5836
                    </p>
                </div>
                <div className="col-6 col-sm secondary-palette-item secondary-palette-item--yellow mx-1">
                    <p className="secondary-palette-item-title">R&A Yellow</p>
                    <p className="secondary-palette-item-content">
                        RGB 227 252 000<br/>
                        H66 S100 B99<br/>
                        HEX E2FC00
                    </p>
                </div>
            </Anim>

            <Anim className="row pt-sm-4 secondary-palette-items">
                <div className="col-6 col-sm secondary-palette-item secondary-palette-item--light-blue mx-1">
                    <p className="secondary-palette-item-title">Print R&A Light Blue</p>
                    <p className="secondary-palette-item-content">
                        Pantone 305C<br/>
                        CMYK 60 00 10 00
                    </p>
                </div>
                <div className="col-6 col-sm secondary-palette-item secondary-palette-item--lilac mx-1">
                    <p className="secondary-palette-item-title">Print R&A Lilac</p>
                    <p className="secondary-palette-item-content">
                        Pantone 2715C<br/>
                        CMYK 60 55 00 00
                    </p>
                </div>
                <div className="col-6 col-sm secondary-palette-item secondary-palette-item--teal mx-1">
                    <p className="secondary-palette-item-title">Print R&A Teal</p>
                    <p className="secondary-palette-item-content">
                        Pantone 333C<br/>
                        CMYK 55 00 40 00
                    </p>
                </div>
                <div className="col-6 col-sm secondary-palette-item secondary-palette-item--orange mx-1">
                    <p className="secondary-palette-item-title">Print R&A Orange</p>
                    <p className="secondary-palette-item-content">
                        Pantone 171C<br/>
                        CMYK 00 75 85 00
                    </p>
                </div>
                <div className="col-6 col-sm secondary-palette-item secondary-palette-item--yellow mx-1">
                    <p className="secondary-palette-item-title">Print R&A Yellow</p>
                    <p className="secondary-palette-item-content">
                        Pantone 395C<br/>
                        CMYK 10 00 90 00
                    </p>
                </div>
            </Anim>
        </div>
    </div>
));

export default ColourSecondaryPalette;
