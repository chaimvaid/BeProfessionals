import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TaskList from '../src/components/TaskList'
import Task from '../src/components/Task'
import React from 'react'


configure({ adapter: new Adapter() });

describe('<TaskList/>', () => {
    it('should contain div #task-list-wrapper', () => {
        const taskListWrapper = shallow(<TaskList tasks={[{}]}/>);
        expect(taskListWrapper.find('#task-list-wrapper')).toHaveLength(1)
    } )

    it('should contain at least one <Task/> ', () => {
        const taskListWrapper = shallow(<TaskList tasks={[{title: 'chaim', description: 'vaidberg'}]}/>);
        expect(taskListWrapper.find(Task).length >= 1).toBe(true)
    } )

    it('should contain h2 with name', () => {
        const taskListWrapper = mount(<TaskList tasks={[{title: 'chaim', description: 'vaidberg'}]}/>);
        expect(taskListWrapper.find('h2').text()).toBe('chaim')
    } )

    it('should contain  two <Task/> ', () => {
        const taskListWrapper = shallow(<TaskList tasks={[{title: 'chaim', description: 'vaidberg'},{title: 'chaim', description: 'vaidberg'}]}/>);
        expect(taskListWrapper.find(Task)).toHaveLength(2)
    } )
    it('should contain  two <Task/> ', () => {
        const taskListWrapper = mount(<TaskList tasks={[{title: 'chaim', description: 'vaidberg'},{title: 'chaim2', description: 'vaidberg'}]}/>);
        expect(taskListWrapper.find('h2').at(1).text()).toBe('chaim2')
    } )

     it('should contain <h3> ', () => {
        const taskListWrapper = shallow(<TaskList tasks={[{}]}/>);
        expect(taskListWrapper.find('h3')).toHaveLength(1)
    } )
     it('h3 inner text shoud be ... ', () => {
        const taskListWrapper = shallow(<TaskList title="Tasks list" tasks={[{}]}/>);
        expect(taskListWrapper.find('h3').text()).toBe('Tasks list')
    } )
})