import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loggedIn: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
        loggedIn: true,
      });
    }, 3000);
  }

  render() {
    const content = this.state.loggedIn
      ? <span data-testid='welcome-message'>Welcome</span>
      : <button onClick={this.handleLogin} disabled={this.state.loading}>Login</button>;
    return (
      <React.Fragment>
        <h1>Click the button below to log in</h1>
        <br />
        {content}
      </React.Fragment>
    );
  }

}