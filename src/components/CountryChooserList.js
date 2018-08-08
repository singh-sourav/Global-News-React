import React, { Component } from "react";
import "./Home.css";
import CountryChooser from "./CountryChooser";

class CountryChooserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: ["us", "in", "fr", "ca", "ru"]
    };
  }

  render() {
    var countryselector = this.state.countries.map(item => (
      <div>
        <CountryChooser
          key={item}
          country={item}
          countrygetter={() => this.props.countryGetter(item)}
          onclick={() => this.props.showNews(item)}
        />
      </div>
    ));
    return (
      <div className="btn-group">
        <div className="row">{countryselector}</div>
      </div>
    );
  }
}

export default CountryChooserList;
