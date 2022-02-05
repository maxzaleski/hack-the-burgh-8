import React from 'react';
import { AuthProvider } from '@providers';
import Layout from 'src/components/Layout/Layout';
import '@styles/index.css';

export default function _App({ Component, pageProps: props }: any) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...props} />
      </Layout>
    </AuthProvider>
  );
}
