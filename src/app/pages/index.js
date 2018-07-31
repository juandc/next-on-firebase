import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        Powered by <span>#Nextjs</span> and <span>#Firebase</span>
        <style jsx>{`
          :global(body) {
            margin: 0;
            padding: 0;
          }

          div {
            align-items: center;
            background-color: #e0dbff;
            color: #333;
            display: flex;
            font-size: 22px;
            justify-content: center;
            height: calc(100vh);
          }

          span {
            border-bottom: 1px solid transparent;
            color: #55f;
            cursor: pointer;
            margin-top: 0;
            margin-left: 7.5px;
            margin-right: 7.5px;
            padding-bottom: 0;
            transition: 0.3s;
            will-change: color, border-bottom-color, margin-top, padding-bottom;
          }

          span:hover {
            border-bottom-color: #55f;
            margin-top: 1px;
            padding-bottom: 1px;
          }

          span:active {
            color: #22b;
            border-bottom-color: #22b;
          }
        `}</style>
      </div>
    );
  }
}
