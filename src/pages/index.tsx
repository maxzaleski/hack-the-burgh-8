import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';

import { useExampleProps } from '@lib/useSSR';
import TinderCard from 'react-tinder-card';
import Button from 'src/components/common/Button';
import UserCard from 'src/components/common/UserCard';
import User from '@lib/schemas/user';
export default function Index(props) {
  const router = useRouter();
  const [friend, setFriend] = useState<User | undefined>(props.user);

  const swipeCardHandler = () => {
    // fetch new user
    setFriend({
      user: {
        name: 'Alex Smith',
        job: 'Software Engineer',
        interests: ['Art', 'Dogs', 'Plants', 'Movies', 'Cars'],
        languages: ['English', 'French'],
        pronouns: 'He/him',
        andtitle: 'Software Engineer & Gamer',
        id: '2',
      },
    });
  };

  return (
    <Fragment>
      <Button>Simple Button</Button>
      <TinderCard onSwipe={swipeCardHandler}>
        <UserCard user={friend} />
      </TinderCard>
    </Fragment>
  );
}

// export const getServerSideProps = useExampleProps();
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
