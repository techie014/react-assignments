import React, { Component } from 'react';

import Header from 'containers/Header';
import ProductList from 'containers/ProductList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  onSearchTextChange = searchText => this.setState({ searchText });

  render() {
    return (
      <div className="App">
        <Header onSearchTextChange={this.onSearchTextChange} />
        <div className="container">
          <ProductList />
        </div>
      </div>
    );
  }
}

export default App;
