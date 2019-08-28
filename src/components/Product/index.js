import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      type: PropTypes.string,
      caption: PropTypes.string,
      thumbnail: PropTypes.string,
      vote: PropTypes.number,
    }),
    onUpVote: PropTypes.func.isRequired,
  };

  static defaultProps = {
    data: {
      name: 'Product X',
      type: 'Unknown',
      caption: '',
      thumbnail: '',
      vote: 0,
    },
  };

  render() {
    const {
      data: { name, type, caption, thumbnail, vote, id },
      onUpVote,
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
        <div className="product-details col-7">
          <span className="product-name">{name}</span>
          <span className="product-caption">{caption}</span>
          <span className="product-type">{type}</span>
        </div>
        <div className="product-vote col-2">
          <div className="vote" onClick={() => onUpVote(id)}>
            <span>{String.fromCharCode(0x2bc5)}</span>
            <span>{vote}</span>
          </div>
        </div>
      </div>
    );
  }
}
