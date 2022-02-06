import React from 'react';
import 'firebase/auth';
import { useSSR } from '@lib/useSSR';
import { API_EVENT_PATH } from '@lib/common';
import { useAuth } from '@hooks';
import { Loading } from '../components/common';
import { Shell } from '../components/Layout';

export default function Foobar(props) {
  const { tokenClaims } = useAuth();

  // React.useEffect(() => {
  //   if (tokenClaims) {
  //     fetch(API_EVENT_PATH + `/${tokenClaims.event_id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log('Foobar: useEffect:', data);
  //       });
  //   }
  // }, [tokenClaims]);

  console.log(props);
  return (
    <Shell>
      <Loading />
    </Shell>
  );
}
