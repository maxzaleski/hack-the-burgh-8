import { useAuth } from '@hooks';
import { ReactNode } from 'react';
import Navbar from '../UI/Navbar/Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  const { firebaseUser, signOut } = useAuth();

  return (
    <div className="main flex flex-col h-full">
      <div className="content flex-grow mx-auto">{children}</div>
      {firebaseUser && (
        <footer className="mt-auto">
          <Navbar />
        </footer>
      )}
    </div>
  );
}
