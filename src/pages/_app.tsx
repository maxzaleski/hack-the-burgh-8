import React from 'react';
import { AuthProvider } from '@providers';
import '@styles/index.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function _App({ Component, pageProps: props }: any) {

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AuthProvider>
      <Component {...props} />
    </AuthProvider>
  );
}
