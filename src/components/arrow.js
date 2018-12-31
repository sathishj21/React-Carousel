import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stlyesheet/arrow.css';
import * as CarouselUtils from '../utils/carousel';
class Arrow extends Component {
    render() {
        const {id, clickAction, content} = this.props;
        const arrowType = CarouselUtils.getArrowType(id);
        return (
            <button className={`button-`+arrowType} id={id} onClick={clickAction}>
                <span className={`icon icon-arrow-`+arrowType}></span>
                <span className="button-content">{content}</span>
            </button>
        );
    }
}

Arrow.propTypes = {
    id: PropTypes.string.isRequired,
    clickAction: PropTypes.func.isRequired,
    content: PropTypes.string
};
Arrow.defaultProps = {
    content: ''
};

export default Arrow;
