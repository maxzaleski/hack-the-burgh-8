import { useContext } from 'react';
import { IShellContext, ShellContext } from '@contexts';

export function useShell(): IShellContext {
  return useContext(ShellContext);
}
