import React, { Component } from 'react';
import { Link } from '../components/Link';

export default class Home extends Component {
  render() {
    return (
      <div>
        Home <Link to="about">About</Link>
      </div>
    );
  }
}
