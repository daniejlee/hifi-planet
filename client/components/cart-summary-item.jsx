import React from 'react';

export default class CartSummaryItem extends React.Component {

  render() {
    const cartItem = this.props.cartItem;
    return (
      <div className="row border my-4 align-items-center">
        <div className="col-4">
          <img src={cartItem.image} className="cart-image"/>
        </div>
        <div className="col ml-5">
          <h2>{cartItem.name}</h2>
          <div className="mt-2">${(cartItem.price / 100).toFixed(2)}</div>
          <p className="mt-2">{cartItem.shortDescription}</p>
        </div>
      </div>
    );
  }
}
