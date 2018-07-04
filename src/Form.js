import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { dbAddress } from './db';

class Form extends Component {
  state = { message: '' };
  onSubmit = async event => {
    event.preventDefault();
    const { message } = this.state;
    await fetch(dbAddress, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ message })
    });
    this.setState({ message: '' });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup>
          <ControlLabel>Message</ControlLabel>
          <FormControl
            type="text"
            placeholder="Message"
            value={this.state.message}
            onChange={event => this.setState({ message: event.target.value })}
          />
        </FormGroup>
        <Button bsStyle="primary" type="submit" block>
          Submit
        </Button>
      </form>
    );
  }
}

export default Form;
