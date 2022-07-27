import React from "react";
import Header from "./Header";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="wrapper">
          <h2>
            {" "}
            <strong>My Bank</strong> Contact info.
          </h2><br></br>
          <h3> Mobile Number : +91XXXXXXX32</h3>
          <h3> Address : banglore, india</h3>

        </div>
      </div>
    );
  }
}

export default Contact;
