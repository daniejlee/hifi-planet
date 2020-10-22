import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default class CheckoutDisclaimer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.toggleModal(false);
  }

  render() {
    return (
      <Modal show={this.props.showModal}
        backdrop="static"
        keyboard={false}
        dialogClassName="justify-content-center"
        centered
      >
        <Modal.Header>
          <Modal.Title>WARNING</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Please do NOT enter any real personal information. No purchases on this site will be made. Thank you.
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={this.handleClick}>I Understand</button>
        </Modal.Footer>
      </Modal>
    );
  }
}
