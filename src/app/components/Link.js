import React, { Component, Children } from 'react';
import WithRouter from '../utils/WithRouter';
import { Link as RouterLink, routes } from '../routes';

export default class Link extends Component {
  static LinkGroup(props) {
    return <LinkGroup {...props} />;
  }

  static ActiveLink(props) {
    return <ActiveLink {...props} />;
  }

  static SimpleLink(props) {
    return <SimpleLink {...props} />;
  }
}

class LinkGroup extends Component {
  render() {
    const { children } = this.props;
    const childrenArray = Children.toArray(children);
    
    return (
      <WithRouter>
        {router => {
          const activeRoute = getActiveRoute(router);

          return childrenArray.map(child => {
            const { key, props: { to: route, text, ...props } } = child;

            return (
              React.createElement(ActiveLink, {
                ...props,
                key,
                route,
                text,
                active: activeRoute === route
              })
            );
          })
        }}
      </WithRouter>
    );
  }
}

class ActiveLink extends Component {
  render() {
    const { text, to, active, ...props } = this.props;

    return (
      <RouterLink route={to} passHref {...props}>
        <a className={active ? 'active' : ''}>{text || to}</a>
      </RouterLink>
    );
  }
}

class SimpleLink extends Component {
  render() {
    const { children, to: route, ...props } = this.props;

    return (
      <RouterLink route={route} passHref {...props}>
        <a>{children}</a>
      </RouterLink>
    );
  }
}

// Helpers
function getActiveRoute({ pathname }) {
  for (let i in routes) {
    const { name, pattern } = routes[i];
    if (pattern === pathname) return name;
  }
}

// function isRouteActive({ pathname }, route) {
//   for (let i in routes) {
//     const { name, pattern } = routes[i];
//     if (pattern === pathname && name === route) return true;
//   }
// }
