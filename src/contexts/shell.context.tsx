import React from 'react';
import 'firebase/auth';
import Prisma from '@prisma/client';

import { Logger } from '@lib';
import { API_EVENT_PATH } from '@lib/common';
import { useAuth } from '@hooks';
import { IAuthContext } from './auth.context';
import { Loading } from '../components/common';

const logger = new Logger('ShellContext');

export interface IShellContext extends IAuthContext {
  event: Prisma.Event;
}

export const ShellContext = React.createContext<IShellContext>({} as IShellContext);

export const ShellProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = React.useState(true);
  const authCtx = useAuth();
  const [event, setEvent] = React.useState({} as Prisma.Event);

  React.useEffect(() => {
    if (authCtx.tokenClaims) {
      fetch(API_EVENT_PATH + `/${authCtx.tokenClaims.event_id}`)
        .then((res) => res.json())
        .then((data) => setEvent(data))
        .catch((err) => logger.error(err))
        .finally(() => setLoading(false));
    }
  }, [authCtx.tokenClaims]);

  const value = React.useMemo<IShellContext>(() => ({ event, ...authCtx }), [event, authCtx]);
  return loading ? (
    <Loading />
  ) : (
    <ShellContext.Provider value={value}>{children}</ShellContext.Provider>
  );
};
