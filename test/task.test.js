import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Task from '../src/components/Task'
import React from 'react'


configure({ adapter: new Adapter() });

describe('<Task/>', () => {
    it('should contain div #task-wrapper', () => {
        const taskWrapper = shallow(<Task/>);
        expect(taskWrapper.find('#task-wrapper')).toHaveLength(1)
    } )

    it('should contain h2', () => {
        const taskWrapper = shallow(<Task/>);
        expect(taskWrapper.find('h2')).toHaveLength(1)
    } )

    it('should contain h2 with name', () => {
        const taskWrapper = shallow(<Task title={'chaim'} />);
        expect(taskWrapper.find('h2').text()).toBe('chaim')
    } )

    it('should contain div>.content', () => {
        const taskWrapper = shallow(<Task/>);
        expect(taskWrapper.find('div>.content')).toHaveLength(1)
    } )

    it('should contain div>.content with description', () => {
        let description = 'test description'
        const taskWrapper = shallow(<Task description={description} />);
        expect(taskWrapper.find('div>.content').text()).toBe(description)
    } )
} )