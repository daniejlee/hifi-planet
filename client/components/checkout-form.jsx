import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.setView = this.setView.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setView() {
    this.props.setView('catalog', {});
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const order = Object.assign({}, this.state);
    this.props.placeOrder(order);
    this.setState({
      name: '',
      creditCard: '',
      shippingAddress: ''
    });
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <h1 className="mt-2">My Cart</h1>
        </div>
        <div className="row">
          <h5 className="checkout-total my-3" key="cartTotal">Order Total <span >${(this.props.getTotal() / 100).toFixed(2)}</span></h5>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" />
          </div>

          <div className="form-group row">
            <label>Credit Card</label>
            <input type="text" name="creditCard" value={this.state.creditCard} onChange={this.handleChange} className="form-control" />
          </div>

          <div className="form-group row">
            <label>Shipping Address</label>
            <textarea type="text" rows="5" name="shippingAddress" value={this.state.shippingAddress} onChange={this.handleChange} className="form-control" />
          </div>

          <div className="row justify-content-between mt-4">
            <div className="col">
              <div className="ml-0 mt-2" style={{ cursor: 'pointer' }} onClick={this.setView}>&lt; Continue Shopping</div>
            </div>
            <div className="col text-right">
              <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Place Order</button>
            </div>
          </div>

        </form>
      </div>
    );
  }

}
