import * as CarouselUtils from '../../utils/carousel';
import * as AppConstant from '../../constant/appConstant';
import Copy from "../../copy/copy.json";

describe('Test getCopy function', () => {
    it('Test if getcopy returns copy from json file', () => {
        const headerText = "header";
        const getCopy = CarouselUtils.getCopy(headerText);
        expect(getCopy).toEqual(Copy[headerText]);
    });
});

describe('Test getVisibleCount function', () => {
    it('Test if getVisibleCount return min count', () => {
        const screenType = AppConstant.screen.MEDIUM;
        const getVisibleCount = CarouselUtils.getVisibleCount(screenType);
        expect(getVisibleCount).toEqual(AppConstant.itemCount.MIN);
    });

    it('Test if getVisibleCount return max count', () => {
        const screenType = AppConstant.screen.LARGE;
        const getVisibleCount = CarouselUtils.getVisibleCount(screenType);
        expect(getVisibleCount).toEqual(AppConstant.itemCount.MAX);
    });
});

describe('Test getArrowType function', () => {
    it('Test if getArrowType return left if id is equal to Previous', () => {
        const id = AppConstant.PREV;
        const getArrowType = CarouselUtils.getArrowType(id);
        expect(getArrowType).toEqual(AppConstant.arrowType.LEFT);
    });

    it('Test if getVisibleCount return max count', () => {
        const id = AppConstant.NEXT;
        const getArrowType = CarouselUtils.getArrowType(id);
        expect(getArrowType).toEqual(AppConstant.arrowType.RIGHT);
    });
});

describe('Test getScrollPosition function', () => {
    it('Test if getScrollPosition for medium size viewport', () => {
        const screenType = AppConstant.screen.MEDIUM;
        const screenWidth = AppConstant.itemCount.INIT;
        const activeItemIndex = 1;
        const itemLength = 5;
        const getScrollPosition = CarouselUtils.getScrollPosition(screenType, screenWidth, activeItemIndex, itemLength);
        expect(getScrollPosition).toEqual(AppConstant.itemCount.INIT);
    });

    it('Test if getScrollPosition for large size viewport with below interval', () => {
        const screenType = AppConstant.screen.LARGE;
        const screenWidth = AppConstant.itemCount.INIT;
        const activeItemIndex = 1;
        const itemLength = 5;
        const getScrollPosition = CarouselUtils.getScrollPosition(screenType, screenWidth, activeItemIndex, itemLength);
        expect(getScrollPosition).toEqual(0);
    });

    it('Test if getScrollPosition for large size viewport with below interval2', () => {
        const screenType = AppConstant.screen.LARGE;
        const screenWidth = 220;
        const activeItemIndex = 4;
        const itemLength = 5;
        const getScrollPosition = CarouselUtils.getScrollPosition(screenType, screenWidth, activeItemIndex, itemLength);
        expect(getScrollPosition).toEqual(-0);
    });

    it('Test if getScrollPosition for large size viewport with above interval', () => {
        const screenType = AppConstant.screen.LARGE;
        const screenWidth = 220;
        const activeItemIndex = 3;
        const itemLength = 8;
        const getScrollPosition = CarouselUtils.getScrollPosition(screenType, screenWidth, activeItemIndex, itemLength);
        expect(getScrollPosition).toEqual(-220);
    });

});