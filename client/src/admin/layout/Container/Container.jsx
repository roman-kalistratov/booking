import React from 'react';
import './container.scss';

const Container = ({children}) => {
  return (
    <div className='container-admin'>{children}</div>
  )
}

export default Container