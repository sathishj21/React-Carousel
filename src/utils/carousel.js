import * as AppConstant from "../constant/appConstant";
import Copy from "../copy/copy.json";

export const getCopy = (key) => {
    return Copy[key];
};

export const getApiURL = (searchType, count) => {
    return `${AppConstant.api.URL}/?key=${AppConstant.api.KEY}&q=${searchType}&image_type=photo&per_page=${count}`;
};

export const getVisibleCount = (screenType) => {
    return (screenType === AppConstant.screen.MEDIUM) ? AppConstant.itemCount.MIN : AppConstant.itemCount.MAX;
};

export const getArrowType = (id) => {
    return (id === AppConstant.PREV)? AppConstant.arrowType.LEFT : AppConstant.arrowType.RIGHT;
};

export const getScreenType = () => {
    return (window.innerWidth <= AppConstant.screen.MAXSIZE)? AppConstant.screen.MEDIUM : AppConstant.screen.LARGE;
};

export const getScrollPosition = (screenType, screenWidth, activeItemIndex, itemLength) => {

    if(screenType === AppConstant.screen.MEDIUM) {
        return (screenWidth === AppConstant.itemCount.INIT)? AppConstant.itemCount.INIT : -(screenWidth * activeItemIndex);
    } else {
        const sizeInterval = Math.floor(AppConstant.itemCount.MAX / 2);
        if(activeItemIndex <= sizeInterval) {
            return 0;
        }

        if(activeItemIndex >= (itemLength - sizeInterval)) {
            return -(screenWidth * (itemLength - AppConstant.itemCount.MAX));
        }
        return -(screenWidth * (activeItemIndex - sizeInterval));
    }
};

export const getPrevNextIndex = (type, currentIndex, itemLength) => {
    return (type === AppConstant.PREV)? (((currentIndex + itemLength) -1) % itemLength) : ((currentIndex + 1) % itemLength);
};

export default {};