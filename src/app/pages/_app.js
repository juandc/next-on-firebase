import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/Layout';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component: Page, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Page {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
