import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    const {
      data: { name, type, caption, thumbnail },
    } = this.props;

    return (
      <div className="product row">
        <div className="product-img col-3">
          <img
            className="product-thumbnail"
            src={thumbnail}
            alt="Unavailable"
          />
        </div>
        <div className="product-details col-9">
          <span className="product-name">{name}</span>
          <span className="product-caption">{caption}</span>
          <span className="product-type">{type}</span>
        </div>
      </div>
    );
  }
}
