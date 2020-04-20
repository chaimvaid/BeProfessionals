import React from 'react'
import Task from './Task'

const TaskList = ({title, tasks}) => {
    return <div id="task-list-wrapper">
             <h3>{title}</h3>
             { tasks.map((t, i)=><Task key={i} title={t.title} description={t.description}/>)}         
           </div>
}

export default TaskList;