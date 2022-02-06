import { useContext } from 'react';
import { AuthContext, IAuthContext } from '@contexts';

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}
