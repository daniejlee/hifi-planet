import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import Banner from './banner';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };

    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: { productId: params }
      }
    });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(response => response.json())
      .then(data => {
        this.setState({
          cart: data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  addToCart(product) {
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(response => response.json())
      .then(data => {
        const newCart = this.state.cart.slice();
        newCart.push(data);
        this.setState({ cart: newCart });
      })
      .catch(error => {
        console.error(error);
      });
  }

  placeOrder(order) {
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .catch(error => {
        console.error(error);
      });
    this.setState({
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    });
  }

  getTotal() {
    if (this.state.cart.length > 0) {
      const total = this.state.cart.reduce((total, element) => total + element.price
        , 0);
      return total;
    }
  }

  render() {
    let currentPage;
    switch (this.state.view.name) {
      case 'catalog':
        currentPage = (
          <React.Fragment>
            <Banner />
            <ProductList setView={this.setView} />
          </React.Fragment>
        );
        break;
      case 'details':
        currentPage = <ProductDetails params={this.state.view.params} addToCart={this.addToCart} setView={this.setView}/>;
        break;
      case 'cart':
        currentPage = <CartSummary cart={this.state.cart} getTotal={this.getTotal} setView={this.setView}/>;
        break;
      case 'checkout':
        currentPage = <CheckoutForm setView={this.setView} placeOrder={this.placeOrder} getTotal={this.getTotal}/>;
        break;
    }
    return (
      <div>
        <Header setView={this.setView} cartItemCount={this.state.cart.length}/>
        {currentPage}
      </div>
    );
  }
}
