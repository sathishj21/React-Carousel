import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
import Items from './items';
import '../stlyesheet/carousel.css';
class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            apiUrl: 'https://pixabay.com/api',
            apiKey: '9656065-a4094594c34f9ac14c7fc4c39',
            imageItems: [],
            isImageDataFetched: false,
            screenWidth: window.innerWidth,
            activeItemIndex: 0,
        };
        this.scrollAction = this.scrollAction.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        if(this.refs.carouselComponent && (this.state.screenWidth !== window.innerWidth)) {
            this.setState({
                screenWidth: ReactDOM.findDOMNode(this.refs.carouselComponent).offsetWidth,
            });
        }
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);

        axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=beautiful+landscape&image_type=image&per_page=5&max_height=500`)
            .then(res => setTimeout(() => this.setState({imageItems: res.data.hits, isImageDataFetched: true}), 100))
            .catch(err => console.log('error ***', err));
    }

    scrollAction(e) {
        const { activeItemIndex, imageItems } = this.state;
        this.setState({
            activeItemIndex: (e.target.id === 'prev')? (((activeItemIndex + imageItems.length) -1) % imageItems.length) : ((activeItemIndex + 1) % imageItems.length),
        });
    }

    render() {
        const screenWidth = this.state.screenWidth;
        const scrollLeft = (screenWidth === 0)? 0 : -(screenWidth * this.state.activeItemIndex);
        const styleObj = { width: (screenWidth * this.state.imageItems.length), marginLeft: scrollLeft};
        return (
            <div className="carousel-container">
                <div ref="carouselComponent" className="carousel-component">
                    <div>React Carousel</div>
                    <div className="carousel-wrapper">
                        <Items isImageDataFetched={this.state.isImageDataFetched} imageItems={this.state.imageItems} styleProps={styleObj} />
                    </div>
                </div>
                <div>
                    <button className="button" id="prev" onClick={this.scrollAction}>Prev</button>
                    <button className="button" id="next" onClick={this.scrollAction}>Next</button>
                </div>
            </div>
        );
    }
}

export default Carousel;
