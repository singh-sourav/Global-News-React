import React, { Component } from "react";

class NewsHeadlines extends Component {
  constructor(props) {
    super(props);
    this.state = { countries: ["us", "in", "fr", "ca", "ru", "au"] };
  }

  render() {
    if (this.props.news.description != null) {
      return (
        <div className="card">
          <div class="row">
            <div className="col-sm-2">
              {" "}
              <img src={this.props.news.urlToImage} height="80" width="150" />
            </div>
            <div className="col-sm-10 card-body">
              {this.props.news.title}
              {this.props.news.description}-{" "}
              <b>{this.props.news.source.name}</b>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default NewsHeadlines;
