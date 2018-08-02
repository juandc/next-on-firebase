import React from "react";
import App, { Container } from "next/app";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps, router };
  }

  render() {
    const { Component: Page, pageProps, router } = this.props;

    return <Container>
        <Layout router={router}>
          <Page {...pageProps} />
        </Layout>
      </Container>;
  }
}
