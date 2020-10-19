import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class Banner extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(event) {
  //   console.log(event);
  // }

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/sundara-banner.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/hd560s-banner.jpg"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
