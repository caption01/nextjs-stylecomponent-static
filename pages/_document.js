import Document, { Head, Main, NextScript, Html } from "next/document";
import { ServerStyleSheet } from "styled-components";

const APP_ENV = process.env.APP_ENV;
class MyHead extends Head {
  render() {
    let { head, styleTags } = this.context;
    return (
      <head {...this.props}>
        {head}
        {styleTags}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.7.0/antd.min.css"
          integrity="sha512-74vrvh18b+tTlQHnF591KylgOKqX7kZZ1nIHlvbjx49vPiFNjwAf3wztKuar1Qbkpt3c71YY/9iB43R4K9O7xA=="
          crossorigin="anonymous"
        />
      </head>
    );
  }
}
export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        {APP_ENV === "prod" ? <MyHead /> : <Head />}
        <body>
          <Main />
          {APP_ENV !== "prod" && <NextScript />}
        </body>
      </Html>
    );
  }
}
