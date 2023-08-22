import React from 'react';
import Anim from '~/components/Anim/Anim.js';

const items = [
    [
        {
            title: 'Usage rights.',
            content: 'Only authorised parties may use the graphics in these brand guidelines. Usage rights will vary between organisations. Please check your agreement to ensure you have rights to use the various materials and artwork provided.'
        },
        {
            title: 'Check your agreement.',
            content: 'Please check your agreement to confirm your access and usage rights to intellectual property and graphics provided in these brand guidelines.'
        },
        {
            title: 'Always follow the guidelines.',
            content: 'Please observe the guidelines in the book. They do not seek to describeall possible applications, but provide examples and instructions that can be translated to a wide variety of scenarios.'
        },
        {
            title: 'The guidelines can change and evolve.',
            content: 'These guidelines are provided in good faith but may be subject to change or update.'
        },
        {
            title: 'Viewing the guidelines.',
            content: 'Only authorised parties may use the graphics in these brand guidelines. Usage rights will vary between organisations. Please check your agreement to ensure you have rights to use the various materials and artwork provided.'
        }
    ],
    [
        {
            title: 'Approvals for all applications.',
            content: 'All applications and uses of intellectual property must be submitted to The R&A’s Corporate Communications Department for approval prior to release or distribution in accordance with the approval process.'
        },
        {
            title: 'Third party IP and photographic imagery.',
            content: 'The R&A is not able to (and does not) grant the right to use any third party intellectual property (photographic or graphic). Prior written consent from the image owner is required for any such use. To this end, any approvals provided by The R&A shall not extend to (or in any way relate to) third party intellectual property.'
        },
        {
            title: 'Your responsibility.',
            content: 'You are responsible for, and should undertake all appropriate actions, checks and processes to ensure that content and use of any material, product or service does not infringe applicable statutes, laws or rights of The R&A and/or any third parties.'
        }
    ]
];

class BestPracticesChecklist extends React.Component {

    /**
     * Render
     */

    render() {
        return (
            <div className="grid-intro">
                <div className="dark-section">
                    <div className="container">
                        <Anim className="row mt-4">
                            <div className="col-sm-12">
                                <h2 className="display-2">
                                    Brand guidelines checklist<span className="text-highlight">.</span>
                                </h2>
                                <p>
                                    Prior to submitting any item for approval please remember the following:
                                </p>
                            </div>
                        </Anim>
                        <Anim className="row">
                            {items.map((itemRow, index)=>(
                                <div key={index} className={`col-sm-${12/items.length}`}>
                                    <ul>
                                        {itemRow.map((item, itemIndex)=> (
                                            <li className="best-practice-checklist-item" key={`${index}-itemRow-${itemIndex}`}>
                                                <p className="best-practice-checklist-item-title">{item.title}</p>
                                                <p className="best-practice-checklist-item-content">{item.content}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Anim>
                    </div>
                </div>

            </div>
        );
    }
}

export default BestPracticesChecklist;
