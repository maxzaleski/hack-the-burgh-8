import React from 'react';
import Button from 'src/components/common/Button';
import { PencilIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { auth } from '@lib';
import { LOGIN_PATH } from '@lib/common';
import { useAuth } from '@hooks';
import UserCard from 'src/components/common/UserCard';
import User from '@lib/schemas/user';
import { Shell } from '../components/Layout';

export default function Profile({ user }: User) {
  const { firebaseUser, signOut } = useAuth();
  const router = useRouter();
  const editHandler = () => {
    router.push('signup/');
  };

  const logoutHandler = React.useCallback(() => {
    signOut()
      .then(async () => await router.push(LOGIN_PATH))
      .catch((err) => console.error(err));
  }, [auth]);

  return (
    <Shell>
      <UserCard
        user={user}
        title={
          <h1 className="text-3xl text-slate-900 flex flex-row justify-between">
            Profile <PencilIcon className="w-7 h-7" onClick={editHandler} />
          </h1>
        }
        extra={
          <Button className="w-full bg-red-300 focus:bg-red-600" onClick={logoutHandler}>
            Sign Out
          </Button>
        }
      />
    </Shell>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      user: {
        name: 'John Doe',
        job: 'Software Engineer',
        interests: ['Engineering', 'Cats', 'Plants', 'Movies', 'Cars'],
        languages: ['English', 'French'],
        pronouns: 'He/him',
        andtitle: 'Software Engineer & Gamer',
        id: '12',
      },
    }, // will be passed to the page component as props
  };
}
