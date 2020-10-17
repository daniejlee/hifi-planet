import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    switch (event.target.id) {
      case 'home':
        this.props.setView('catalog', {});
        break;
      case 'cart':
        this.props.setView('cart', {});
    }
  }

  render() {
    const items = this.props.cartItemCount;
    return (
      <nav className="navbar navbar-dark navcolor justify-content-between py-1">
        <a className="navbar-brand header" id="home" href="#" onClick={this.handleClick}>
           Hi-Fi Planet
        </a>
        <div className="cart" id="cart" onClick={this.handleClick}>
          {items} Item{items === 1 ? '' : 's'}
          <i className="fas fa-shopping-cart ml-2"></i>
        </div>
      </nav>
    );
  }
}
