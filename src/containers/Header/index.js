import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar';

export default class Header extends Component {
  static propTypes = {
    onSearchTextChange: PropTypes.func,
  };

  render() {
    const { onSearchTextChange } = this.props;

    return (
      <div className="header row">
        <div className="col-6">
          <SearchBar onSearchTextChange={onSearchTextChange} />
        </div>
      </div>
    );
  }
}
