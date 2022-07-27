import React from "react";
import Contact from "./Contact";
import Header from "./Header";
import ImageMain from "./ImageMain";
import Login from "./Login";
import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <hr></hr>
        <div class="parent">
          <div class="inline-block-child"><Login/></div>
          <div class="inline-block-child"><ImageMain/></div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Home;
