import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    coin: '',
    data: [],
  }

  oncoinChange = (ev) => {
    let value = ev.target.value;
    console.log('coin is', value)
    this.setState({
      coin: value,
    });
  }

  onSubmit = () => {
    console.log('onSubmit function clicked', this.state.coin);
    //fetch(`https://api.github.com/users/${this.state.coin}/repos`)
    fetch(`https://api.coinlore.com/api/tickers/`)
    .then(response => response.json())
    .then(data => {
      console.log("data received", data)
      this.setState({
        results: data,
      });
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://thumbs.gfycat.com/WildTepidBaboon-size_restricted.gif" />
          <h1 className="App-title">Coin Search</h1>
        </header>
        <div className="Form">
<div className="Searchboxybox">
          <input
              placeholder="Enter your coin"
              value={this.state.coin}
              onChange={this.oncoinChange}
            />
          <h2>Coin: {this.state.coin || ''}</h2>
          <button onClick={() => this.onSubmit()}>Submit</button>
          </div>

          {
            this.state.data.map(item => (
              <div>
                <hr />
                <h2>{item.name}</h2>
                <p>{item.description}</p>

              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;