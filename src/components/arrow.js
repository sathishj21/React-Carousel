import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stlyesheet/arrow.css';
class Arrow extends Component {
    render() {
        const arrowType = (this.props.id === "prev")? "left" : "right"
        return (
            <button className={`button-`+arrowType} id={this.props.id} onClick={this.props.clickAction}>
                <span className={`icon icon-arrow-`+arrowType}></span>
                <span className="button-content">{this.props.content}</span>
            </button>
        );
    }
}

Arrow.propTypes={};
Arrow.defaultProps={};

export default Arrow;
