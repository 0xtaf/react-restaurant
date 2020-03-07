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
    {console.log("home click: "+this.state.isHomeClicked)}
    {console.log("contact click: "+this.state.isContactClicked)}
    {console.log("menu click: "+this.state.isMenuClicked)}
    return (
      
      <div className="App">      
      {console.log('rendered app again')}
        <div className="tab-color"></div>
        <Buttons 
          onIsMenuClickedChange={this.handleIsMenuClickedChange}
          onIsContactClickedChange={this.handleIsContactClickedChange}
          onIsHomeClickedChange={this.handleIsHomeClickedChange}
        />
        <div className={isMenuClicked ? 'blurred' : 'bgg'}></div> 
        <Header />  
        <div className='color'></div> 
        {console.log(Buttons.state)};
      </div>
    );
  }
  
}

export default App;
