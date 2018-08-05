import React, { Component } from 'react';
import CountryChooserList from './CountryChooserList'
import NewsHeadlines from './NewsHeadlines';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { newsArr: [], countryChosen: "" };
  }

  getCountryName(countryCode) {
    var countryName;
    switch (countryCode) {
      case "us":
        countryName = "USA"
        break;
      case "in":
        countryName = "India"
        break;
      case "ru":
        countryName = "Russia"
        break;
      case "fr":
        countryName = "France"
        break;
      case "au":
        countryName = "Australia"
        break;
      case "ca":
        countryName = "Canada"
        break;
    }
    return countryName;
  }


  handleclick(country) {
    fetch(`https://newsapi.org/v2/top-headlines?source=google-news&country=${country}&apiKey=a9b320f1f47644f99dab6b9407db90b0`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          newsArr: json.articles,
          countryChosen: this.getCountryName(country)
        })

      });


  }

  render() {

    var newsCards = this.state.newsArr.map((item) => (
      < NewsHeadlines key={item.url} news={item} />
    ));
    var d = new Date();
    return (

      <div className="App-header" >
        <img className="App-logo" src={require('./NewsLogo.png')} />
        <div><b>Choose a country and read the top news headlines </b></div>
        <CountryChooserList countryGetter={(x) => this.getCountryName(x)} showNews={(i) => this.handleclick(i)} />
        <div className="App"><b>{this.state.countryChosen}</b></div>
        {
          newsCards
        }
      </div >
    );
  }
}

export default Home;