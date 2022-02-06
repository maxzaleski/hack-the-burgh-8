import { useContext } from 'react';
import { AuthContext, IAuthContext, IShellContext, ShellContext } from '@contexts';

export function useShell(): IShellContext {
  return useContext(ShellContext);
}
