import React, { useState } from 'react';
import arrow from '../../assets/img/arrow.png'

function Collapse({ title, text }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const handleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };


    return (
        <div className='collapse'>
            <div className='collapse_title' onClick={handleCollapse}>
                <h2>{title}</h2>
                <img src={arrow} alt="arrow" />
            </div>
            {!isCollapsed && (
            <div className='collapse_text'>
                <p>{text}</p>
            </div>
            )}
        </div>
    );
}
export default Collapse;