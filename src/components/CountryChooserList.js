import React, { Component } from 'react';
import './Home.css';
import CountryChooser from './CountryChooser'

class CountryChooserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: ["us", "in", "fr", "ca", "ru", "au"], countryName: {
        us: "USA"
      }
    };
  }



  render() {

    var countryselector = this.state.countries.map((item) => (

      <CountryChooser key={item} country={item} countrygetter={() => this.props.countryGetter(item)} onclick={() => this.props.showNews(item)} />

    )
    )

    return (
      <div className="btn-group">
        {
          countryselector
        }
      </div>
    );
  }





}

export default CountryChooserList;