import React from 'react';
import { AuthProvider } from '@providers';
import '@styles/index.css';

export default function _App({ Component, pageProps: props }: any) {
  return (
    <AuthProvider>
      <Component {...props} />
    </AuthProvider>
  );
}
