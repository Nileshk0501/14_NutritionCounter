// HelloWorldPage.jsx

import React from 'react';
import{ useLocation }from 'react-router-dom'
const Answer = (prop) => {
    console.log(prop)
    const location = useLocation();
    const propdata = location.state;
  return (
    <div>
      <h1>{propdata.fn}</h1>
    </div>
  );
};

export default Answer;
