import { Component } from 'react';
import { withRouter } from 'next/router';

export default withRouter(WithRouter);

class WithRouter extends Component {
  render() {
    const { children, router } = this.props;

    return children(router);
  }
}
