import React from "react";
import template from "./SearchImage.jsx";
import ServerCall from "../ServerCalls/ServerCall.js";

class SearchImage extends React.Component {

  constructor() {
    super();

    this.state = {
      placeName: '',
      myurls: []
    }

    this.getname = this.getname.bind(this);
    this.sendreq = this.sendreq.bind(this);
  }

  getname(eve) {
    const { value } = eve.target;
    this.setState({
      placeName: value
    })
  }

  sendreq() {
    const { placeName, myurls } = this.state;
    console.log(placeName);
    ServerCall.sendgetReq(placeName)
      .then((res) => {
        debugger;
        console.log(res.data.results);
        this.setState({
          myurls: res.data.results
        })
        console.log(this.state.myurls);
        debugger;
      })

      .catch((res) => {
        console.log(res.data);
      })

  }

  render() {
    return template.call(this);
  }
}

export default SearchImage;
