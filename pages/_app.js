import React from "react";
// next imports
import App from "next/app";
import Head from "next/head";
// config
import "config/axios_configuration";
// layouts
import SiteLayout from "layouts/SiteLayout";
// app css
import "styles/App.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps, err } = this.props;
    const modifiedPageProps = { ...pageProps, err };
    return (
      <>
        <Head>
          <title>Docket</title>
        </Head>
        <SiteLayout>
          <Component {...modifiedPageProps} />
        </SiteLayout>
      </>
    );
  }
}

export default MyApp;
