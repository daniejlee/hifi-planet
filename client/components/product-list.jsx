import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const productList = [];
    for (let i = 0; i < this.state.products.length; i++) {
      productList.push(
        <ProductListItem
          key={this.state.products[i].productId}
          image={this.state.products[i].image}
          name={this.state.products[i].name}
          price={this.state.products[i].price}
          shortDescription={this.state.products[i].shortDescription}
        />
      );
    }
    return (
      <div className="container" style={{ marginTop: '2rem' }}>
        <div className="row">
          {productList}
        </div>
      </div>
    );
  }

}
