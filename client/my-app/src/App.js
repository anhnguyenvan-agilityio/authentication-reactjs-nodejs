import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

class App extends Component {
  constructor(props) {
    super(props);
  }
  googleResponse = (response) => {
    console.log("==>", response);
    const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)], { type: 'application/json' });
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };
    fetch('http://localhost:4000/api/v1/auth/google', options).then(r => {
      const token = r.headers.get('x-auth-token');
      r.json().then(user => {
        if (token) {
          // this.setState({ isAuthenticated: true, user, token })
          console.log('Login SUCCESS');
          console.log(token);
        }
      });
    })
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
