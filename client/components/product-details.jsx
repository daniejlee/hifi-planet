import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.params.productId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          product: data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  setView() {
    this.props.setView('catalog', {});
  }

  addToCart() {
    this.props.addToCart(this.props.params);
  }

  render() {
    if (this.state.product) {
      const product = this.state.product;
      return (
        <div className="container">
          <div className="mt-4 mx-2 detail-container align-self-center justify-self-center">
            <div className="row ml-0" style={{ cursor: 'pointer' }} onClick={this.setView}>&lt; Back to Catalog</div>
            <div className="row mt-3">
              <div className="col-md-4 text-center">
                <img src={product.image} className="detail-image" />
              </div>
              <div className="col-md-7 mt-2 px-3 detail-description">
                <h2>{product.name}</h2>
                <div className="mt-2">${(product.price / 100).toLocaleString()}</div>
                <p className="mt-2">{product.shortDescription}</p>
                <button type="button" className="btn btn-dark" onClick={this.addToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="row mt-5 px-3">{product.longDescription}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
