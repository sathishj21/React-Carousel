import React, { Component } from 'react';
import '../stlyesheet/carousel.css';
class Items extends Component {

    imageDataIterate() {
        let itemData = this.props.imageItems.map((item, index) => {
            return (
                <div key={index} className="item">
                    <img src={item.largeImageURL} alt="alt-text" />
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

export default Items;
