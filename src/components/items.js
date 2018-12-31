import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import '../stlyesheet/carousel.css';
class Items extends Component {

    imageDataIterate() {
        let itemData = this.props.imageItems.map((item, index) => {
            const classNames = ClassNames({
                "item": true,
                "active": index === this.props.activeItemIndex
            });
            return (
                <div key={index} className={classNames}>
                    <img src={item.webformatURL} alt="alt-text" />
                    <p className="slider-caption">{item.tags.split(',')[0].toUpperCase()}</p>
                    <div className="slider-caption-wrapper"></div>
                </div>
            )
        });
        return itemData;
    }

    render() {
        const { widthSize, scrollLeft } = this.props;
        return (
            <div className="carousel-container" style={{width: widthSize, marginLeft: scrollLeft}}>
                {this.imageDataIterate()}
            </div>
        );
    }
}

Items.propTypes={
    imageItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    widthSize: PropTypes.number.isRequired,
    scrollLeft: PropTypes.number.isRequired,
};
Items.defaultProps={};

export default Items;
