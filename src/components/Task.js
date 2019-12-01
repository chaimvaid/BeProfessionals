import React from 'react'

const Task = ({title, description}) => {
    return <div id="task-wrapper">
            <h2>{title}</h2>
            <div className="content">
                {description}
            </div>
           </div>
}

export default Task;