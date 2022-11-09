import React from 'react';
import './wrapper.scss';

const Wrapper = ({children}) => {
  return (
    <div className='wrapper-admin'>{children}</div>
  )
}

export default Wrapper