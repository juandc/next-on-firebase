import { Component } from 'react';
import { withRouter } from 'next/router';
import { Router } from '../routes';

class WithRouter extends Component {
  render() {
    const { children, router } = this.props;
    const childrenProps = {
      ...router,
      ...Router,
    };

    return children(childrenProps);
  }
}

export default withRouter(WithRouter);
