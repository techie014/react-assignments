import React, { Component } from 'react';
import PropTypes from 'prop-types';
import data from 'data/data.json';
import Product from 'components/Product';

export default class ProductList extends Component {
  static propTypes = {
    filterText: PropTypes.string,
  };

  static defaultProps = {
    filterText: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      productDetails: data,
    };
  }

  renderProducts = () => {
    const { productDetails } = this.state;
    return (
      <ul className="product-list col-12">
        {productDetails.products.map(productData => (
          <li className="product-container col-12">
            <Product data={productData} />
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div className="product-list-container row">{this.renderProducts()}</div>
    );
  }
}
