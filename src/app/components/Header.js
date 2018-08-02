import React, { Component } from "react";
import Icon from "./Icon";
import { Link } from "../routes";

export default class Header extends Component {
  render() {
    console.log(this.props.router)
    
    return (
      <header>
        <div className="align-left">
          <Link route="home" passHref>
            <a>Home</a>
          </Link>
          {/* <Link route="library" params={{ libraryName: "firebase" }}>
            <a>Firebase</a>
          </Link>
          <Link route="library" params={{ libraryName: "nextjs" }}>
            <a>Next</a>
          </Link> */}
        </div>

        <div className="align-right">
          <a href="//github.com/juandc/next-on-firebase" target="_blank">
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

          .align-left { margin-right: auto; }
          .align-right { margin-left: auto; }

          a { color: inherit; }
          a:not(:first-child) { margin-left: 10px; }
        `}</style>
      </header>
    );
  }
}
