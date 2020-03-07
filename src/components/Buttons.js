import React from 'react';

function Button() {
  return (
    <div>
      <Home />
      <Menu />
      <Contacts />
    </div>
  )
}

function Home(){
  return(
    <div>
      <button className='btnNav'>Home</button> 
    </div>
  )
}
function Menu(){
  return(
    <div>
      <button className='btnNav' >Menu</button> 
    </div>
  )
}
function Contacts(){
  return(
    <div>
      <button className='btnNav' >Contacts</button> 
    </div>
  )
}


export default Button;