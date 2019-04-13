import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  static propTypes = {
    onSearchTextChange: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.props.onSearchTextChange(this.state.searchText);
    }
  }

  onSearchTextChange = searchText => this.setState({ searchText });

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search for products..."
          onChange={this.onSearchTextChange}
        />
      </div>
    );
  }
}
