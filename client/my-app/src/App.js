import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

class App extends Component {
  constructor(props) {
    super(props);
  }
  googleResponse = (response) => {
    console.log("==>", response);
  }
  onFailure = (error) => {
    console.log("==>", error);
  }
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="667129435571-piqhb4gmdi9kk9iebe6jir18hrb2ae08.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.googleResponse}
          onFailure={this.onFailure}
        />
      </div>
    );
  }
}

export default App;
