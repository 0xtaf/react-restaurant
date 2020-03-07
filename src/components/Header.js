import React from 'react';

function Header(props) {
  return (   
    <div className="content">
        {props.children}
    </div>   
  )
}

export default Header;