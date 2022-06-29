import React from 'react';
import Hoc from  './Hoc';

const HomePage = (props) => {
  return (
    <div>
      <h1>welcome Hoc page {props.name}</h1>
    </div>
  )
}

export default Hoc(HomePage)
