import React, { Component, Fragment, Children } from "react";
import { withRouter } from "next/router";
import { Link as RouterLink } from "../routes";
import { routes } from "../routes"

export default class Link extends Component {
  static LinkGroup = props => <LinkGroup {...props} />;
  static ActiveLink = props => <ActiveLink {...props} />;
  static HashLink = props => <HashLink {...props} />;
}

class LinkGroup extends Component {
  render() {
    const { children, router } = this.props;
    const childrenArray = Children.toArray(children);
    const activeRoute = getActiveRoute(router);

    return (
      <Fragment>
        {childrenArray.map(
          ({ key, props: { to: route, text, ...props } }) =>
            React.createElement(ActiveLink, {
              ...props,
              key,
              route,
              text,
              active: activeRoute === route
            })
        )}
      </Fragment>
    );
  }
}

LinkGroup = withRouter(LinkGroup);

class ActiveLink extends Component {
  render() {
    const { text, to, active, ...props } = this.props;

    return (
      <RouterLink route={to} passHref {...props}>
        <a className={active && "active"}>
          {text || to}
        </a>
      </RouterLink>
    );
  }
}


class HashLink extends Component {
  render() {}
}

function getActiveRoute({ pathname }) {
  for (let i in routes) {
    const { name, pattern } = routes[i];
    if (pattern === pathname) return name;
  }
}

function isRouteActive({ pathname }, route) {
  for (let i in routes) {
    const { name, pattern } = routes[i];
    if (pattern === pathname && name === route) return true;
  }
}

