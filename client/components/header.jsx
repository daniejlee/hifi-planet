import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setView('catalog', {});
  }

  render() {
    const items = this.props.cartItemCount;
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <div className="container">
          <a className="navbar-brand header" href="#" onClick={this.handleClick}>
           $ Wicked Sales
          </a>
          <div className="cart">
            {items} Item{items === 1 ? '' : 's'}
            <i className="fas fa-shopping-cart ml-2"></i>
          </div>
        </div>
      </nav>
    );
  }
}
