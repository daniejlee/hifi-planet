import React from 'react';

export default class CartSummaryItem extends React.Component {

  render() {
    const cartItem = this.props.cartItem;
    return (
      <div className="row border my-4 cart-summary-item align-items-center">
        <div className="col-md-4">
          <img src={cartItem.image} className="cart-image"/>
        </div>
        <div className="col-md-7">
          <h2>{cartItem.name}</h2>
          <div className="mt-2">${(cartItem.price / 100).toLocaleString()}</div>
          <p className="mt-2">{cartItem.shortDescription}</p>
        </div>
      </div>
    );
  }
}
