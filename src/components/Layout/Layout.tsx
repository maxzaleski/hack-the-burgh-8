import { useAuth } from '@hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ReactNode } from 'react';
import LogoBar from '../common/Logobar';
import Navbar from '../common/Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  const { tokenClaims, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!tokenClaims.id) {
      router.push("/signin");
    }
  }, [])

  return (
    <div className="main flex flex-col h-full">
      <section>
        <LogoBar />
      </section>
      <div
        className="content flex flex-col items-center mt-4 h-full w-full"
        style={{ overflowY: 'scroll' }}>
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
