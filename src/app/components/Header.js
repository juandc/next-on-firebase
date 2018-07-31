import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <Link href={{ pathname: "/library", query: { library: "Zeit" } }}>
            <a>About</a>
          </Link>
        </div>
        <style jsx>{`
          header {
            background-color: #18bf5d;
            color: #fff;
            margin: 0;
            padding: 12px 24px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
          }
        `}</style>
      </header>
    );
  }
}
