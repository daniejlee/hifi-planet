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
      .then(result => {
      });
  }

  render() {
    let currentPage;
    switch (this.state.view.name) {
      case 'catalog':
        currentPage = <ProductList setView={this.setView} />;
        break;
      case 'details':
        currentPage = <ProductDetails params={this.state.view.params} setView={this.setView}/>;
        break;
    }

    return (
      <div>
        <Header setView={this.setView}/>
        {currentPage}
      </div>
    );
  }
}
