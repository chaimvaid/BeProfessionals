import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/TaskList'

ReactDOM.render(<TaskList title="Task list" tasks={[{title: 'chaim', description: 'vaidberg'},{title: 'chaim2', description: 'vaidberg'}]}/>, document.getElementById('container'))