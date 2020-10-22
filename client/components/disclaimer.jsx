import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default class Disclaimer extends React.Component {
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
          <Modal.Title>DISCLAIMER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This website is made for demonstration purposes only. No real purchases will be made.
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={this.handleClick}>I Understand</button>
        </Modal.Footer>
      </Modal>
    );
  }
}
