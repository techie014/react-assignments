import React, { Component } from 'react';
import debounce from 'lodash/debounce';

import Header from 'containers/Header';
import ProductList from 'containers/ProductList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.onSearchTextChange = debounce(this.onSearchTextChange, 200);
  }

  onSearchTextChange = searchText => this.setState({ searchText });

  render() {
    const { searchText } = this.state;

    return (
      <div className="App">
        <Header onSearchTextChange={this.onSearchTextChange} />
        <div className="container">
          <ProductList filterText={searchText} />
        </div>
      </div>
    );
  }
}

export default App;
