import React, { Component } from "react";

export default class Libary extends Component {
  static async getInitialProps({ query }) {
    return {
      query
    };
  }

  render() {
    const {
      query: { library }
    } = this.props;

    return <div>This library is: {library}</div>;
  }
}
