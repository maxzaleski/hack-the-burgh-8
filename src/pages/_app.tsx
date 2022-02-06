import React from 'react';
import { AuthProvider } from '@contexts';
import Layout from 'src/components/Layout/Layout';
import '@styles/index.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function _App({ Component, pageProps: props }: any) {

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AuthProvider>
      <Layout>
        <Component {...props} />
      </Layout>
    </AuthProvider>
  );
}
