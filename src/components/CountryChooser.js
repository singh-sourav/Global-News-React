import React, { Component } from "react";

class CountryChooser extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, newsHeadlines: [] };
  }

  render() {
    return (
      <div>
        <button className="btn-info" onClick={() => this.props.onclick()}>
          {this.props.countrygetter()}
        </button>
      </div>
    );
  }
}

export default CountryChooser;
