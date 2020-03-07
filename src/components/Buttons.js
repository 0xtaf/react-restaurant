import React from 'react';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.state = {
      isMenuClicked: false,
      isHomeClicked: false,
      isContactClicked: false,
    }
  }

  handleMenuClick() {
    this.setState({isMenuClicked: true});
    console.log('menüye tıklandı')
  }

  render() {
    return (
      <div className='tab-bar'>
        <Contacts />
        <Menu onMenuClick={this.handleMenuClick}/>
        <Home />      
      </div>
    )
  }
}

function Home(){
  return(   
    <button className='btnNav'>Home</button>    
  )
}
class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {isOpened: false};
    this.menuClickHandler = this.menuClickHandler.bind(this);
  }
  
  menuClickHandler() {
    this.props.onMenuClick();    
  }
  
  render() {
    return(
      <button className='btnNav' onClick={this.menuClickHandler}>Menu</button>    
    )
  }    
}
function Contacts(){
  return(  
    <button className='btnNav' >Contact</button> 
  )
}




export default Button;