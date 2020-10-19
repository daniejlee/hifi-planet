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
    const productList = this.state.products.map(element => {
      return (
        <ProductListItem
          key={element.productId}
          productId={element.productId}
          image={element.image}
          name={element.name}
          price={element.price}
          shortDescription={element.shortDescription}
          setView={this.props.setView}
        />
      );
    });
    return (
      <div className="container mt-5 product-list">
        <div className="row justify-content-center">
          {productList}
        </div>
      </div>
    );
  }

}
