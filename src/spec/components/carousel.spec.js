import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../../components/carousel';

describe('Carousel component', () => {
    const RendererComponent = (props) => {
        return shallow(<Carousel {...props} />);
    };

    const defaultProps = {};
    it('shallow renders Carousel component without crashing', () => {
        const CarouselComponent = RendererComponent({...defaultProps});
        expect(CarouselComponent).toMatchSnapshot();
    });

    it('test component scrollAction with target previous action instance', () => {
        const e = {
            target: {
                id: "prev"
            }
        };
        const component = RendererComponent({...defaultProps});
        const inst = component.instance();
        inst.scrollAction(e);
    });

    it('test component scrollAction with target previous action instance', () => {
        const e = {
            target: {
                parentNode: {
                    id: "next"
                }
            }
        };
        const component = RendererComponent({...defaultProps});
        const inst = component.instance();
        inst.scrollAction(e);
    });

    it('test component updateDimensions instance', () => {
        const component = RendererComponent({...defaultProps});
        const inst = component.instance();
        inst.refs = {carouselComponent: true};
        window.addEventListener = () => { };
        window.removeEventListener = () => { };
        inst.updateDimensions();
    });
});