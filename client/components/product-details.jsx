import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.setView = this.setView.bind(this);
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

  render() {
    if (this.state.product) {
      const product = this.state.product;
      return (
        <div className="container border mt-4 p-4">
          <div className="row ml-0" style={{ cursor: 'pointer' }} onClick={this.setView}>&lt; Back to Catalog</div>
          <div className="row mt-3">
            <div className="col-4">
              <img src={product.image} className="detail-image" />
            </div>
            <div className="col ml-5">
              <h2>{product.name}</h2>
              <div className="mt-2">${(product.price / 100).toFixed(2)}</div>
              <p className="mt-2">{product.shortDescription}</p>
            </div>
          </div>
          <div className="row ml-0 mt-5">{product.longDescription}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}
