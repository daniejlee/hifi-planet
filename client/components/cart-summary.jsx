import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
  }

  setView() {
    this.props.setView('catalog', {});
  }

  getTotal(cart) {
    if (cart.length > 0) {
      const total = cart.reduce((total, element) => total + element.price
        , 0);
      return total;
    }
  }

  render() {
    const cart = this.props.cart;
    const cartList = cart.map(cartItem => {
      return (<CartSummaryItem key={cartItem.productId} cartItem={cartItem}/>);
    });
    const itemTotal = (<h4 key="cartTotal">Item Total <span className="cart-total">${(this.getTotal(cart) / 100).toFixed(2)}</span></h4>);
    return (
      <div className="container mt-4">
        <div className="row ml-0 mt-2" style={{ cursor: 'pointer' }} onClick={this.setView}>&lt; Back to Catalog</div>
        <h1 className="mt-2">My Cart</h1>
        { cart.length > 0
          ? [cartList, itemTotal]
          : (<div className="empty-cart mt-4">Your Shopping Cart is empty</div>)
        }
      </div>
    );
  }
}
