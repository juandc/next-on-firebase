import React, { Component, Children } from 'react';
import WithRouter from '../utils/WithRouter';
import { Link as RouterLink, routes } from '../routes';

export default class Link extends Component {
  static LinkGroup() {
    return props => <LinkGroup {...props} />;
  }

  static ActiveLink() {
    return props => <ActiveLink {...props} />;
  }

  static HashLink() {
    return props => <HashLink {...props} />;
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
          
          return childrenArray.map(({ key, props: { to: route, text, ...props } }) =>
            React.createElement(ActiveLink, {
              ...props,
              key,
              route,
              text,
              active: activeRoute === route
            })
          )
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

class HashLink extends Component {
  render() {
    return null;
  }
}

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
