import React from 'react';
import './App.css';
import Header from './components/Header';
import Buttons from './components/Buttons';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleIsMenuClickedChange = this.handleIsMenuClickedChange.bind(this);
    this.handleIsContactClickedChange = this.handleIsContactClickedChange.bind(this);
    this.handleIsHomeClickedChange = this.handleIsHomeClickedChange.bind(this);
    this.state = {
      isMenuClicked: false,
      isHomeClicked: false,
      isContactClicked: false,
    }
  }

  handleIsMenuClickedChange() {
    const currentState = this.state.isMenuClicked;
    this.setState({
      isMenuClicked: !currentState,
      isHomeClicked: false,
      isContactClicked: false,
    });
  }
  handleIsContactClickedChange() {
    const currentState = this.state.isContactClicked;
    this.setState({
      isContactClicked: !currentState,
      isHomeClicked: false,
      isMenuClicked: false,
    });    
  }
  handleIsHomeClickedChange() {
    const currentState = this.state.isHomeClicked;
    this.setState({
      isHomeClicked: !currentState,
      isMenuClicked: false,
      isContactClicked: false,
    });
  }

  render() {
    const isMenuClicked = this.state.isMenuClicked;
    const isContactClicked = this.state.isContactClicked;
    const isHomeClicked = this.state.isHomeClicked;
    const menuStyle = {
      display: 'none',
    }
    const menuStyleActive = {
      display: 'block',
      
    }
    return (
      
      <div className='App'>      
      {console.log('rendered app again')}
        <div className="tab-color"></div>
        <Buttons 
          onIsMenuClickedChange={this.handleIsMenuClickedChange}
          onIsContactClickedChange={this.handleIsContactClickedChange}
          onIsHomeClickedChange={this.handleIsHomeClickedChange}
        />
        
        <div className='menu' style={isMenuClicked ? menuStyleActive : menuStyle}></div>
        
        <div className={(isMenuClicked || isContactClicked) ? 'blurred' : 'bgg'}></div> 
        
        <Header>
          <h1 className="header">0xtaf's Restaurant</h1>
          <p className={(isMenuClicked || isContactClicked) ? 'clearIntro' : 'intro'}>Inspired React Cuisine</p>
        </Header>  

        <div className={(isMenuClicked || isContactClicked) ? 'colorless' : 'color'}></div> 
        {console.log(Buttons.state)};
        <div className="contact" style={isContactClicked ? menuStyleActive : menuStyle}>
          <h1 className="contact1">DROP ME A MESSAGE</h1>
          <p className="contact2">Let me know if you'd like to share any opinions or suggestions.</p>
          <h1 className="contact3">EMAIL</h1>
          <p className="contact4">tayfunsur@gmail.com</p>
          <h1 className="contact5">GITHUB</h1>
          <a href="http://github.com/0xtaf" className="contact6">http://github.com/0xtaf</a>
          <h1 className="contact7">TWITTER</h1>
          <a href="https://twitter.com/OdbTayfun" className="contact8">https://twitter.com/OdbTayfun</a>
        </div>
      </div>
    );
  }
  
}

export default App;
