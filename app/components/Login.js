import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleUserInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  login(e) {
    e.preventDefault();
    const { password, email } = this.state;
    const { history, signIn } = this.props;
    fetch('http://localhost:3000/api/users', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password })
    }).then(response => {
      if(response.status > 300) {
        this.setState({
          error: 'Email and password do not match',
          email: '',
          password: ''
        });
        throw Error('Invalid email or password');
      }
      return response.json()
    }).then(json => {
      console.log(json);
      signIn(json.data)
      history.push('/')
    })
  }

  render() {
    return(
      <div>
        <h2>Login Page</h2>
        <form>
          Email
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={ (e) => this.handleUserInput(e) }
          />
          Password
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={ (e) => this.handleUserInput(e) }
          />

        <button onClick={ (e) => this.login(e) } >Submit</button>
        { this.state.error !== '' && <h2>{this.state.error}</h2>}

        </form>
      </div>
    );
  }
}
