import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'null',
      view: {
        name: 'catalog',
        params: {}
      },
      isLoading: true
    };

    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: { productId: params }
      }
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
        <Header />
        {currentPage}
      </div>
    );
  }
}
