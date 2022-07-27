import React from "react";
import Header from "./Header";

class SendFunds extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="wrapper">
          <h2>
            {" "}
            <strong>Make a Payment Now.</strong>
          </h2>
          <br></br>
        </div>
      </div>
    );
  }
}

export default SendFunds;
