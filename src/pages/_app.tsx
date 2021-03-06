import React from 'react';
import { AuthProvider, ShellProvider } from '@contexts';
import '@styles/index.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function _App({ Component, pageProps: props }: any) {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AuthProvider>
      <ShellProvider>
        <Component {...props} />
      </ShellProvider>
    </AuthProvider>
  );
}
