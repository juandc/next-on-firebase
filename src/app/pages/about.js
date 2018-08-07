import React, { Component } from 'react';
import { Link } from '../components/Link';

export default class Home extends Component {
  render() {
    return (
      <div>
        About <Link to="home">Home</Link>
      </div>
    );
  }
}
