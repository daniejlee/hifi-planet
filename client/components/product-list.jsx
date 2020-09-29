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
      return (<ProductListItem
        key={element.productId}
        image={element.image}
        name={element.name}
        price={element.price}
        shortDescription={element.shortDescription}
      />);
    });
    return (
      <div className="container" style={{ marginTop: '2rem' }}>
        <div className="row">
          {productList}
        </div>
      </div>
    );
  }

}
