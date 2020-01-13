
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
class GLogin extends Component {

  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }
    return(
      <div className="GLogin">
        <GoogleLogin
        clientId="970022508132-qd1rq99f7j7o1eus9ncpr0s2crt1f494.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        />
      </div>
    );
  }
}
export default GLogin;
