import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../../components/Header';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'


test('should render Header correctlyy',()=>{
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();


    //const renderer = new ReactShallowRenderer();
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();  ;
})