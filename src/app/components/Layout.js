import React, { Component, Fragment } from 'react';
import Header from './Header'

export default class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <Header />
        <div className="page">{children}</div>
        <style jsx global>{`
          :root {
            --color-black: #333;
            --color-white: #fff;
            --font-base: monospace;
            --header-height: 40px;
          }
          body {
            background-color: var(--color-white);
            color: var(--color-black);
            font-family: var(--font-base);
            margin: 0;
            padding: 0;
          }
          .page {
            align-items: center;
            display: flex;
            justify-content: center;
            height: calc(100vh - var(--header-height));
            margin-top: var(--header-height);
          }
        `}</style>
      </Fragment>
    );
  }
}
