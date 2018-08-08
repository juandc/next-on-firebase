import React, { Component } from 'react';
import Link from '../components/Link';

export default class Home extends Component {
  render() {
    return (
      <div>
        Home <Link.SimpleLink to="about">About</Link.SimpleLink>
      </div>
    );
  }
}
