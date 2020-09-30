import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

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

  render() {
    let currentPage;
    switch (this.state.view.name) {
      case 'catalog':
        currentPage = <ProductList setView={this.setView} />;
        break;
      case 'details':
        currentPage = <ProductDetails params={this.state.view.params} addToCart={this.addToCart} setView={this.setView}/>;
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
