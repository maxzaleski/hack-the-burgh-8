import { useAuth } from '@hooks';
import { ReactNode } from 'react';
import LogoBar from '../common/Logobar';
import Navbar from '../UI/Navbar/Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  const { firebaseUser, signOut } = useAuth();

  return (
    <div className="main flex flex-col h-full">
      <section>
        <LogoBar />
      </section>
      <div className="content mx-auto mb-auto h-full" style={{ overflowY: 'scroll' }}>
        {children}
      </div>
      {firebaseUser && (
        <footer>
          <Navbar />
        </footer>
      )}
    </div>
  );
}
