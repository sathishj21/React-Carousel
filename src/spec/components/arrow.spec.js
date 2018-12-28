import React from 'react';
import { shallow } from 'enzyme';
import Arrow from '../../components/arrow';

const defaultProps = {
    id: "prev",
    clickAction:jest.fn(),
    content: "Prev"
};


it('shallow renders Carousel component without crashing', () => {
    shallow(<Arrow {...defaultProps} />);
});