import React from 'react';
import Carousel from '~/components/Carousel/Carousel.js';
import Anim from '~/components/Anim/Anim.js';

const typeExamples = [
    {
        'title': 'Radikal Regular',
        'sub': '55pt/68pt (Tracking value 15)',
        'text': 'Invella cus qui imoles Xeratis.',
        'class': 'font-size-68'
    },
    {
        'title': 'Radikal Medium',
        'sub': '36pt/45pt (Tracking value 15)',
        'text': 'Invella cus qui imoles Xeratis quiae. Nam hic torer umquia quis gue eario.',
        'class': 'font-size-45 font-weight-bold'
    },
    {
        'title': 'Radikal Regular',
        'sub': '20pt/26pt (Tracking value 15)',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat placerat lorem ut posuere. Ut luctus placerat posuere. Cras eu magna in nulla convallis consectetur a at augue. Nullam mi risus, aliquam eget iaculis non, placerat eu tortor.',
        'class': 'font-size-26'
    },
    {
        'title': 'Radikal Light',
        'sub': '14pt/18pt (Tracking value 15)',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat placerat lorem ut posuere. Ut luctus placerat posuere. Cras eu magna in nulla convallis consectetur a at augue. Nullam mi risus, aliquam eget iaculis non, placerat eu tortor. Nullam bibendum eu ante non lobortis. Pellentesque ut turpis vel elit semper maximus. Cras eget nisi pulvinar, aliquam leo ac, maximus velit. Etiam faucibus nisi mi, vitae tincidunt augue egestas eu. Etiam. Nullam mi risus, aliquam eget iaculis non, placerat eu.',
        'class': 'font-size-18 font-weight-light'
    },
    {
        'title': 'Radikal Light',
        'sub': '10pt/13pt (Tracking value 15)',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a libero eros. In molestie posuere enim, nec fermentum purus scelerisque ac. Maecenas vel eleifend nulla. Nulla vitae porttitor enim. Duis commodo tortor pharetra, tempus nulla at, mattis dolor. Nunc eu orci interdum, facilisis nisi vitae, volutpat nisl. Maecenas sed leo sit amet mi lacinia malesuada vel eu neque. Integer sed vestibulum orci. Pellentesque bibendum nunc ut varius semper. Mauris vel elit nec enim pretium ullamcorper non ac risus. Fusce rutrum risus et ligula pretium dictum. Nunc at tellus fringilla, hendrerit ipsum id, hendrerit lacus. Nulla a mattis justo. Phasellus euismod augue sit amet risus fermentum vulputate. Praesent venenatis felis a erat dapibus accumsan a non justo. Praesent ac velit nisl. Etiam vehicula elit quis ante dignissim dictum. Pellentesque eu ipsum imperdiet, dictum sapien at, imperdiet nibh. Cras id tellus ex. Nunc eu orci interdum, facilisis nisi vitae, volutpat nisl.',
        'class': 'font-size-13 font-weight-light'
    }
];

const TypographyExample = React.memo(() => (
    <div className="typography-example">
        <div className="dark-section">
            <div className="container big-spacing">
                <Anim className="row">
                    <div className="col-sm-5">
                        <Carousel
                            className="carousel"
                            hideArrows>
                            {typeExamples.map((type, key) => (
                                <div key={key}>
                                    <div className="panel panel-default panel-carousel light">
                                        <div className="panel-heading text-primary">
                                            <span className="font-weight-bold">{type.title}</span>
                                            <div className="float-right">{type.sub}</div>
                                        </div>
                                        <div className="panel-body">
                                            <div className={`font-display ${type.class}`}>
                                                {type.text}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="offset-sm-1 col-sm-5">
                        <h1 className="display-2">
                            Example type<span className="text-highlight">.</span>
                        </h1>
                        <p className="display-3 text-highlight">
                            These examples are a guide for setting typography in large blocks.
                        </p>
                        <p> The preferred choice for continuous body copy in literature is 10pt type with 13 pt line
                            spacing. However for designs incorporating large amounts
                            of type this may be reduced to 9pt type with 12 pt line spacing. A single weight option must
                            be used consistently across the entirety of a document.
                        </p>
                        <p>
                            To improve readability line length for body copy should be no shorter than 40 characters and
                            no longer than 70.
                        </p>
                    </div>
                </Anim>
            </div>
        </div>
    </div>
));

export default TypographyExample;
