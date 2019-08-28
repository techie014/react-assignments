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
      productList: data,
    };
  }

  productComparator = (product1, product2) => {
    if (product1.vote < product2.vote) {
      return 1;
    }
    if (product1.vote > product2.vote) {
      return -1;
    }
    return 0;
  };

  onProductUpVote = id => {
    this.setState(prevState => {
      const { productList: prevProductList } = prevState;
      prevProductList.forEach(product => {
        if (product.id === id) {
          product.vote++;
        }
      });

      return { productList: prevProductList };
    });
  };

  renderProducts = () => {
    const { productList } = this.state;
    const { filterText } = this.props;

    const filteredProductList = productList
      .filter(product =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      )
      .sort(this.productComparator);

    if (filteredProductList.length) {
      return (
        <ul className="product-list col-12">
          {filteredProductList.map(productData => (
            <li key={productData.id} className="product-container col-12">
              <Product data={productData} onUpVote={this.onProductUpVote} />
            </li>
          ))}
        </ul>
      );
    }
    return (
      <div className="not-found">
        <span>{'Sorry, nothing matched your search'}</span>
      </div>
    );
  };

  render() {
    return (
      <div className="product-list-container row">{this.renderProducts()}</div>
    );
  }
}
