import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stlyesheet/carousel.css';
class Items extends Component {

    imageDataIterate() {
        let itemData = this.props.imageItems.map((item, index) => {
            return (
                <div key={index} className="item">
                    <img src={item.webformatURL} alt="alt-text" />
                    <p className="slider-caption">{item.tags.split(',')[0].toUpperCase()}</p>
                    <div className="slider-caption-wrapper"></div>
                </div>
            )
        });
        return itemData;
    }

    render() {
        return (
            <div className="carousel-container" style={this.props.styleProps}>
                {this.imageDataIterate()}
            </div>
        );
    }
}

Items.propTypes={
    imageItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    styleProps: PropTypes.shape({}).isRequired,
};
Items.defaultProps={};

export default Items;
