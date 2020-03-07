import React from 'react';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
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
  handleContactClick() {
    this.setState({isContactClicked: true});
    console.log('contacta tıklandı')
  }
  handleHomeClick() {
    this.setState({isHomeClicked: true});
    console.log('homa tıklandı')
  }

  render() {
    return (
      <div className='tab-bar'>
        <Contact onContactClick={this.handleContactClick}/>
        <Menu onMenuClick={this.handleMenuClick}/>
        <Home onHomeClick={this.handleHomeClick}/>      
      </div>
    )
  }
}

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {isOpened: false};
    this.homeClickHandler = this.homeClickHandler.bind(this);
  }
  
  homeClickHandler() {
    this.props.onHomeClick();    
  }
  
  render() {
    return(
      <button className='btnNav' onClick={this.homeClickHandler}>Home</button>    
    )
  }    
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
class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {isOpened: false};
    this.contactClickHandler = this.contactClickHandler.bind(this);
  }
  
  contactClickHandler() {
    this.props.onContactClick();    
  }
  
  render() {
    return(
      <button className='btnNav' onClick={this.contactClickHandler}>Contact</button>    
    )
  }    
}




export default Button;