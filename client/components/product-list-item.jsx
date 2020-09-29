import React from 'react';

export default class ProductListItem extends React.Component {

  render() {
    return (
      <div className="col card-col">
        <div className="card product-card">
          <img src={this.props.image} className="card-img-top product-image" />
          <div className="card-body">
            <h5 className="card-title product-title">{this.props.name}</h5>
            <div className="card-text product-price">${(this.props.price / 100).toFixed(2)}</div>
            <p className="card-text product-description">{this.props.shortDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}
