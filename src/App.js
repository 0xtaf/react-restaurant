import React from 'react';
import './App.css';
import Header from './components/Header';
import Buttons from './components/Buttons';



class App extends React.Component {
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
      <div className="App">      
        <div className="tab-color"></div>
        <Buttons />
        <div className='bgg'></div> 
        <Header />  
        <div className='color'></div> 
        {console.log(Buttons.state)};
      </div>
    );
  }
  
}

export default App;
