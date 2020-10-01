import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
  }

  setView(event) {
    switch (event.target.id) {
      case 'back':
        this.props.setView('catalog', {});
        break;
      case 'checkout':
        this.props.setView('checkout', {});
        break;
    }
  }

  render() {
    const cart = this.props.cart;
    const cartList = cart.map(cartItem => {
      return (<CartSummaryItem key={cartItem.productId} cartItem={cartItem}/>);
    });
    const itemTotal = (
      <div key="footer" className="row justify-content-between mt-4">
        <div className="col">
          <h5>Item Total
            <span className="cart-total"> ${(this.props.getTotal() / 100).toFixed(2)}</span>
          </h5>
        </div>
        <div className="col text-right">
          <button type="submit" id="checkout" className="btn btn-primary" onClick={this.setView}>Checkout</button>
        </div>
      </div>
    );
    return (
      <div className="container mt-4">
        <div className="row ml-0 mt-2" id="back" style={{ cursor: 'pointer' }} onClick={this.setView}>&lt; Back to Catalog</div>
        <h1 className="mt-2">My Cart</h1>
        { cart.length > 0
          ? [cartList, itemTotal]
          : (<div className="empty-cart mt-4">Your Shopping Cart is empty</div>)
        }
      </div>
    );
  }
}
