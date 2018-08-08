import React, { Component } from "react";
import CountryChooserList from "./CountryChooserList";
import NewsHeadlines from "./NewsHeadlines";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsArr: [],
      countryChosen: "",
      loaded: true,
      curTime: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  getCountryName(countryCode) {
    var countryName;
    switch (countryCode) {
      case "us":
        countryName = "USA";
        break;
      case "in":
        countryName = "India";
        break;
      case "ru":
        countryName = "Russia";
        break;
      case "fr":
        countryName = "France";
        break;
      case "au":
        countryName = "Australia";
        break;
      case "ca":
        countryName = "Canada";
        break;
    }
    return countryName;
  }

  handleclick(country) {
    this.setState({
      loaded: false
    });
    fetch(
      `https://newsapi.org/v2/top-headlines?source=google-news&country=${country}&apiKey=a9b320f1f47644f99dab6b9407db90b0`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          newsArr: json.articles,
          countryChosen: this.getCountryName(country),
          loaded: true
        });
      });
  }

  render() {
    var newsCards = this.state.newsArr.map(item => (
      <NewsHeadlines key={item.url} news={item} />
    ));
    return (
      <div>
        <div className="App-header">
          <img className="App-logo" src={require("./NewsLogo.png")} />
          <div style={{ color: "grey" }}>
            <b>{this.state.curTime}</b>
          </div>
          <div>
            <b>Choose a country and read the top news headlines </b>
          </div>
          <CountryChooserList
            countryGetter={x => this.getCountryName(x)}
            showNews={i => this.handleclick(i)}
          />
          <div className="App">
            <b>{this.state.countryChosen}</b>
          </div>
          {newsCards}
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <img
              style={this.state.loaded ? { display: "none" } : {}}
              width="200"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
