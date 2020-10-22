import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.setView('details', event.target.id);
  }

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/sundara-banner.jpg" useMap="#sundara" />
          <map name="sundara">
            <area className="cursor-pointer" shape="default" alt="Computer" id="3" onClick={this.handleClick} />
          </map>
        </Carousel.Item>

        <Carousel.Item>
          <div className="banner-container">
            <img className="d-block w-100 banner-img" src="/images/hd560s-banner.jpg" useMap="#hd560s"/>
            <map name="hd560s">
              <area className="cursor-pointer" shape="default" alt="Computer" id="2" onClick={this.handleClick} />
            </map>
            <div className="banner-text">
              <h1 className="hd560s-title">
                Sennheiser HD560S
              </h1>
              <br/>
              <div className="hd560s-text">
                $199.99
                <br/>
                Natural and accurate reference sound
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}
