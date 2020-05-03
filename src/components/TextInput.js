import React from 'react'

const TextInput = ({title, description}) => {
    return <div id="input-wrapper">
           	<input type="text"/>
           </div>
}

export default TextInput;


// import React, { useState } from 'react'

// function MyName () {
//     const [ name, setName ] = useState('')

//     function handleChange (evt) {
//         setName(evt.target.value)
//     }
    
//     return (
//         <div>
//             <h1>My name is: {name}</h1>
//             <input type="text" value={name} onBlur={handleChange} />
//         </div>
//     )
// }

// export default MyName