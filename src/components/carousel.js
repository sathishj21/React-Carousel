import React, { Component } from 'react';
import ReactDOM from "react-dom";
import * as AppConstant from '../constant/appConstant';
import axios from 'axios';
import Items from './items';
import Arrow from './arrow';
import Loader from './loader';
import * as CarouselUtils from '../utils/carousel';
import '../stlyesheet/carousel.css';
class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            imageCategory: AppConstant.searchImageDefault.TYPE,
            imageCount: AppConstant.searchImageDefault.COUNT,
            imageItems: [],
            loader: true,
            screenWidth: window.innerWidth,
            screenType: CarouselUtils.getScreenType(),
            activeItemIndex: 0,
            error: false,
            errorMessage:'',
        };
        this.scrollAction = this.scrollAction.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.apiServiceCall();
    }

    updateDimensions() {
        if(this.refs.carouselComponent && (this.state.screenWidth !== window.innerWidth)) {
            this.setState({
                screenWidth: ReactDOM.findDOMNode(this.refs.carouselComponent).offsetWidth,
                screenType: CarouselUtils.getScreenType(),
            });
        }
    }
    
    apiServiceCall() {
        const { imageCategory, imageCount } = this.state;
        axios.get(CarouselUtils.getApiURL(imageCategory, imageCount))
            .then(res => setTimeout(() => this.setState({
                imageItems: res.data.hits,
                loader: false,
            }), AppConstant.api.DELAYTIMER))
            .catch(err => this.setState({
                    error: true,
                    errorMessage: err.message,
                    loader: false,
                })
            );
    }


    scrollAction(e) {
        const actionType = e.target.id || e.target.parentNode.id;
        const { activeItemIndex, imageItems } = this.state;
        this.setState({
            activeItemIndex: CarouselUtils.getPrevNextIndex(actionType, activeItemIndex, imageItems.length),
        });
    }

    render() {
        const { loader, screenType, screenWidth, activeItemIndex, imageItems, error, errorMessage } = this.state;
        const itemVisibleCount = CarouselUtils.getVisibleCount(screenType);
        const visibleScreenWidth = (screenWidth / itemVisibleCount);
        const scrollLeft = CarouselUtils.getScrollPosition(
            screenType,
            visibleScreenWidth,
            activeItemIndex,
            imageItems.length
        );
        return (
            <div className="main-container">
                {loader ?
                    <Loader />
                    :
                    <div ref="carouselComponent" className="carousel-component">
                        <h1>{CarouselUtils.getCopy('header')}</h1>
                        {error?
                            <div>
                                {CarouselUtils.getCopy('error.message')}
                                <span className="error-message">{errorMessage}</span>
                            </div>
                            :
                            <div>
                                <div className="carousel-wrapper">
                                    <Items
                                        activeItemIndex={activeItemIndex}
                                        imageItems={imageItems}
                                        widthSize={visibleScreenWidth * imageItems.length}
                                        scrollLeft={scrollLeft}
                                    />
                                </div>
                                <Arrow id={AppConstant.PREV} clickAction={this.scrollAction} content={CarouselUtils.getCopy('arrow.previous')}/>
                                <Arrow id={AppConstant.NEXT} clickAction={this.scrollAction} content={CarouselUtils.getCopy('arrow.next')}/>
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default Carousel;
