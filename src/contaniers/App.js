import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import Routes from "../route";

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }
  // async componentDidMount() {
  //   try {
  //     if (await authUser()) {
  //       this.userHasAuthenticated(true);
  //     }
  //   }
  //   catch(e) {
  //     alert(e);
  //   }

  //   this.setState({ isAuthenticating: false });
  // }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  // handleLogout = event => {
  //   signOutUser();

  //   this.userHasAuthenticated(false);

  //   this.props.history.push("/login");
  // }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      // !this.state.isAuthenticating &&
      <div className="App container">
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default withRouter(App);
