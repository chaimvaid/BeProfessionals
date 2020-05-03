import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextInput from '../src/components/TextInput'
import React from 'react'


configure({ adapter: new Adapter() });

describe('<TextInput/>', () => {

    // it('should contain div ', () => {
    //     const taskWrapper = shallow(<TextInput/>);
    //     expect(taskWrapper.find('div')).toHaveLength(1)
    // } )

    it('should contain div #input-wrapper ', () => {
        const taskWrapper = shallow(<TextInput/>);
        expect(taskWrapper.find('#input-wrapper')).toHaveLength(1)
    } )

    it('should contain on input element ', () => {
        const taskWrapper = shallow(<TextInput/>);
        expect(taskWrapper.find('input')).toHaveLength(1)
    } )

    
} )