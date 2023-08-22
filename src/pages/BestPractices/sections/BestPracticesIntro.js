import React from 'react';
import Anim from '~/components/Anim/Anim.js';
import DropdownIcon from '~/components/Icons/DropdownIcon';
import classnames from 'classnames';

const items = [
    {
        title: 'The R&A',
        content: [
            [
                'When referring to the company, always capitalise the ‘T’: The R&A.',
                'Department names and job titles are always capitalised.',
                'The R&A’s Director of Golf Development.'
            ]
        ]
    },
    {
        title: 'The Royal and Ancient Golf Club of St Andrews',
        subTitle: 'May be referred to as:',
        content: [
            [
                'the Club',
                'The Royal and Ancient Golf Club',
                'The Royal and Ancient Golf Club of St Andrews',
                'The Royal and Ancient Clubhouse'
            ]
        ]
    },
    {
        title: 'The Open Championship “T/t”',
        content: [
            [
                'The Open Championship',
                'The 138th Open Championship',
                'The Open',
                'the Champion Golfer of the Year',
                'the Claret Jug',
                'the Silver Medal'
            ],
            [
                'the Championship',
                'the Champion',
                {
                    title: 'The following is compulsory for use on headings, signage and merchandise (note the capital “T”):',
                    content: [
                        'The Open Championship 2018',
                        'The Open 2018'
                    ]
                }
            ],
            [
                {
                    title: ' In editorial the following is also acceptable (note the lower case “t”):',
                    content: [
                        'the 2018 Open Championship',
                        'the 2018 Open'
                    ]
                }
            ]
        ]
    },
    {
        title: 'Open Venues',
        content: [
            [
                {
                    title: 'When talking about Open venues use the full name of the club/course in the first instance. Subsequently, it is fine to use the shorter or more commonly used version.',
                    content: [
                        "First instance: The Open was held at Carnoustie in 2018.",
                        "Subsequently: Francesco Molinari lifted the Claret Jug at Carnoustie in 2018"
                    ]
                }
            ],
            [
                'St Andrews',
                'Prestwick Golf Club (Prestwick)',
                'Muirfield',
                'Royal St George’s Golf Club (Sandwich)',
                'Royal Liverpool Golf Club (Hoylake)',
                'Royal Lytham & St Annes Golf Club (Lytham)',
                'Royal Troon Golf Club (Troon)',
                'Royal Birkdale Golf Club (Birkdale)'
            ],
            [
                'Carnoustie',
                'Musselburgh',
                'Turnberry',
                'Royal Cinque Ports Golf Club (Deal)',
                'Prince’s Golf Club (Sandwich)',
                'Royal Portrush Golf Club (Portrush)'
            ]
        ]
    },
    {
        title: 'The R&A’s Championships',
        content: [
            [
                'The Amateur Championship',
                'the Boys Amateur Championship',
                'the Seniors Open Amateur Championship',
            ],
            [
                'the Boys Home Internationals',
                'the Junior Open Championships'
            ]
        ],
    },
    {
        title: 'Co-sanctioned Championships',
        content: [
            [
                'The Senior Open Championship',
                'the Walker Cup',
                'the Jacques Leglise Trophy',
                'the St Andrews Trophy'
            ],
            [
                'the Asian Amateur Championship',
                'the World Amateur Team Championships',
                'the Eisenhower Trophy',
                'the Espirito Santo Trophy'
            ]
        ]
    },
    {
        title: 'Other Majors',
        content: [
            [
                'Capitalise the “M” of Major when referring to the other three professional Major championships.'
            ],
            [
                {
                    title: 'Do not capitalise the “T” in “the” before:',
                    content: [
                        'the Masters',
                        'the US Open',
                        'the PGA Championship'
                    ]
                }
            ]
        ]
    },
    {
        title: 'Tours',
        subTitle: 'When referring to a professional Tour, always capitalise the “T” of “Tour”: “Harrington has had three wins on Tour this year”.',
        content: [
            [
                'the Asian Tour',
                'the PGA European Tour',
                'the Japan Golf Tour',
                'the PGA Tour'
            ],
            [
                'the PGA Tour of Australasia',
                'the Sunshine Tour',
                'the Race to Dubai',
                'the FedExCup (no spaces)'
            ]
        ]
    },
    {
        title: 'Rankings',
        content: [
            [
                {
                    title: ' When referring to the WAGR, OWGR or Rolex Women’s Golf Ranking, capitalise “T” in “Top” and always follow with numerals: eg the WAGR Top 50.',
                    content: [
                        "At all other times do not capitalise the “t”: “He finished in the top 50 at The Open”."
                    ]
                }
            ],
            [
                {
                    title: 'The following can be used to refer to the WAGR database and the positions within it.',
                    content: [
                        'WAGRank 3',
                        'WAGRanked 7',
                        'WAGRanking',
                        'WAGRankings'
                    ]
                }
            ],
            [
                {
                    title: 'WAGRanking, OWGR and Rolex Women’s Golf Ranking positions should be displayed numerically when directly following the title of the ranking: Official World Golf Ranking Number 7, WAGRanked 5, Rolex Ranking Number 2.',
                    content: [
                        'When not referring directly to the title of the ranking then words can be used for numbers under 10: third, seventh etc.',
                        'When not referring directly to the title of the ranking capital letters are not necessary: “The world number one is Lorena Ochoa”.'
                    ]
                }
            ]
        ]
    },
    {
        title: 'Rules',
        content: [
            [
                {
                    title: ' Always capitalise the “R” and “G” in the phrase, Rules of Golf.',
                    content: [
                        '“He contravened the Rule.”',
                        '“They talked about the Rules of Golf.”',
                        '“The referee gave him a ruling.”'
                    ]
                }
            ],
            [
                'When referring to a specific Rule always construct as follows: Rule 23-1 or Rule 1-2. Exerting influence on a Ball.',
                'When referring to a decision always construct as follows: Decision 16-1b/2.'
            ]
        ]
    },
    {
        title: 'R&A URLs',
        content: [
            [
                {
                    title: 'When used as proper nouns, display as follows:',
                    content: [
                        'Opengolf.com',
                        'RandA.org',
                        'Bestcourseforgolf.org'
                    ]
                }
            ],
            [
                {
                    title: 'When used as a URL address, display as follows:',
                    content: [
                        'www.randa.org'
                    ]
                }
            ]

        ]
    },
    {
        title: 'Dates',
        content: [
            [
                'All dates should appear as follows: 20 January 2009.',
                'Two consecutive dates should appear as follows: 3 & 4 July.',
                'Non-consecutive dates should appear as follows: 16 – 19 July.'
            ]
        ]
    },
    {
        title: 'Match Play Scores',
        content: [
            [
                'Victories by one or two holes should be displayed using numerals and a capital ‘H’: “Shin won by 1 Hole”.',
                'Remaining final scores should be displayed using numerals and ampersands as follows: 3&2 (no spaces).',
                ' Mid-round scores should be displayed as follows: “He is 1-up”, “He was 2-down after 15 before coming back to win”.'
            ]
        ]
    }
];

class BestPracticesIntro extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: null
        };
    }

    /**
     * Handlers
     */

    setActiveItem = (index) => {
        this.setState((oldState)=> {
            let newIndex = index;
            if (oldState.activeIndex === index) {
                newIndex = null;
            }

            return {
                activeIndex: newIndex
            };
        });
    }

    /**
     * Render
     */

    render() {
        return (
            <div className="grid-intro">
                <div className="hero" style={{backgroundImage: "url(" + require('../../../images/ra/best_hero.jpg') + ")"}} />
                <div className="dark-section">
                    <div className="container">
                        <Anim className="row mt-4">
                            <div className="col-sm-12">
                                <h1 className="display-1">
                                    Best Practices<span className="text-highlight">.</span>
                                </h1>
                            </div>
                        </Anim>
                    </div>
                </div>
                <div className="white-section">
                    <div className="container big-spacing">
                        <Anim className="row">
                            <div className="col-sm-4">
                                <h1 className="display-2">
                                    Editorial Rules<span className="text-highlight">.</span>
                                </h1>
                                <p className="display-3">
                                    This section outlines The R&amp;A’s Editorial Rules.
                                </p>
                            </div>
                            <div className="col-sm-4">
                                <p> These should be used in all The R&A’s publications and across any piece of work
                                    commissioned
                                    by or for The R&A.
                                </p>
                                <p>These rules are important as they allow for all The R&A’s editorial to be consistent
                                    in
                                    style.
                                </p>
                            </div>
                            <div className="col-sm-4">
                                <p className="font-weight-bold">Please contact The R&A’s Communications Department for clarification if necessary.</p>
                            </div>
                        </Anim>

                        <Anim className="row pt-5">
                            {items.map((item, index)=> (
                                <div key={item.title} className={classnames("col-sm-12", {'best-practices-item--active': this.state.activeIndex === index})}>
                                    <h4
                                        className="best-practices-list-item-title  d-flex justify-content-between align-items-center"
                                        onClick={this.setActiveItem.bind(this,index)}
                                    >
                                        {item.title}
                                        <span className="best-practices-list-item-icon"><DropdownIcon lightMode /></span>
                                    </h4>
                                    <div className="container best-practices-list-content">
                                        {item.subTitle && <p>{item.subTitle}</p>}
                                        <div className="row">
                                            {item.content.map((content, contentIndex)=>(
                                                <div key={`${item.title}-${contentIndex}`} className={`col-sm-${12/item.content.length}`}>
                                                    <ul>
                                                        {content.map((contentItem, itemIndex)=>(
                                                            <li className="best-practices-list-content-item" key={`${item.title}-${index}-${itemIndex}`}>
                                                                {typeof contentItem === 'string' && contentItem}
                                                                {typeof contentItem === 'object' && <span>
                                                                    {contentItem.title}
                                                                    <ul className="best-practices-list-content-subitem">
                                                                        {contentItem.content.map((contentSubItem, subItemIndex)=>(
                                                                            <li className="best-practices-list-content-item" key={`${item.title}-${index}-${itemIndex}-${subItemIndex}`}>
                                                                                {contentSubItem}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </span>}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}

                                        </div>

                                    </div>
                                </div>
                            ))}
                        </Anim>
                    </div>
                </div>
            </div>
        );
    }
}

export default BestPracticesIntro;
