import React, { Component } from 'react';
import debounce from 'lodash/debounce';

import Header from 'containers/Header';
import ProductList from 'containers/ProductList';
import { UserContext } from 'contexts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      email: undefined,
      userName: undefined,
    };
    this.onSearchTextChange = debounce(this.onSearchTextChange, 200);
  }

  updateUser = (email, userName) => this.setState({ email, userName });

  onSearchTextChange = searchText => this.setState({ searchText });

  render() {
    const { searchText, email, userName } = this.state;

    return (
      <div id="app">
        <UserContext.Provider
          value={{ email, userName, updateUser: this.updateUser }}
        >
          <Header onSearchTextChange={this.onSearchTextChange} />
          <div className="container">
            <ProductList filterText={searchText} />
          </div>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
