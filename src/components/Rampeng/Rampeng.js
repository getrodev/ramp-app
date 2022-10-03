import React from 'react'; 
import Datee from '../Date/Datee'
import './Rampeng.css'

//Please write a simple React app that does the following: 
//A component takes one prop named "input". 
//There are three types of input: 1. 
// If the prop is a falsy value, return a live-updating date and time (update every second) in a div. 
// Please pretty-format the date and time. Use the native JavaScript Date object. 2. 
// If the prop is an array, return a list of divs, each containing one element of the array. 3. 
// If the prop is anything else, return the value of the prop in a div. Functional components using React Hooks are preferred, though not required. 

const Rampeng = ({input}) => {
  
  let content; 
  if (input === undefined) { 
    content = (<div><Datee /></div>); 
  } else if (Array.isArray(input) ) {
    content = ( 
      <div className='container'>
          <ul className="item-list">
            {input.map(p => (
              <li key={p}>{p}</li>
            ))}
          </ul>
      </div>
    );
  } else {
    content = <div>{input}</div>
  }
  return (<div className='container'>{content}</div>);
}

export default Rampeng; 