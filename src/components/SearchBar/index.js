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

  onSearchTextChange = event =>
    this.setState({ searchText: event.target.value });

  render() {
    const { searchText } = this.state;
    return (
      <div className="search-bar">
        <input
          value={searchText}
          placeholder="Search for products..."
          onChange={this.onSearchTextChange}
        />
      </div>
    );
  }
}
