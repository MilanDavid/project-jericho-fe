import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import './ScrollBox.scss';

class ScrollBox extends React.Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {top: 0};
    }

    renderTrackHorizontal({style, ...props}) {
        const finalStyle = {
            ...style,
            right: 0,
            bottom: 0,
            left: 0,
            height: 10,
        };
        return <div className="scroll-box-track" style={finalStyle} {...props} />;
    }

    render() {
        return (
            <Scrollbars
                className="scroll-box"
                autoHeight
                autoHeightMax={1500}
                renderTrackHorizontal={this.renderTrackHorizontal.bind(this)}
                renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
                {...this.props}
            >
                <div className="scroll-box-content">
                    {this.props.children}
                </div>
            </Scrollbars>
        );
    }
}

export default ScrollBox;