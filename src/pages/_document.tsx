import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class _Document extends Document {
  render() {
    return (
      <Html className="h-full">
        <Head>{/*  Add your manifest assets here */}</Head>
        <body className="h-full">
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
