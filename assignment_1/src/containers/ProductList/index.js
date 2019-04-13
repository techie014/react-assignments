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
      loading: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.filterText !== this.props.filterText) {
      this.setLoaderStatus(true);
    }

    if (this.state.loading && !prevState.loading) {
      this.updateProductList();
    }
  }

  setLoaderStatus = loading => this.setState({ loading });

  updateProductList = () => {
    const { filterText } = this.props;
    const productList = data.filter(product =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );
    console.log(productList);
    this.setState({ productList, loading: false });
  };

  renderProducts = () => {
    const { productList } = this.state;
    return (
      <ul className="product-list col-12">
        {productList.map(productData => (
          <li key={productData.name} className="product-container col-12">
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
