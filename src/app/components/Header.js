import React, { Component } from 'react';
import Icon from './Icon';
import Link from './Link';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="align-left">
          <Link.LinkGroup>
            <Link.ActiveLink to="home" text="Homepage" />
            <Link.ActiveLink to="about" text="About" />
          </Link.LinkGroup>
        </div>

        <div className="align-right">
          <a href="//github.com/juandc/next-on-firebase" target="_blank" rel="noopener noreferrer">
            <Icon name="github" color="white" size="16" />
          </a>
        </div>

        <style jsx>{`
          header {
            background-color: var(--color-black);
            color: var(--color-white);
            height: var(--header-height);

            align-items: center;
            display: flex;

            margin: 0;
            padding: 0 24px;

            position: absolute;
            top: 0;
            left: 0;
            right: 0;
          }
          header > * {
            align-items: center;
            display: flex;
            height: 100%;
          }

          .align-left {
            margin-right: auto;
          }
          .align-right {
            margin-left: auto;
          }

          header :global(a) {
            color: inherit;
            text-decoration: underline;
          }
          header :global(a.active) {
            text-decoration: none;
          }
          header :global(a):not(:first-child) {
            margin-left: 10px;
          }
        `}</style>
      </header>
    );
  }
}
