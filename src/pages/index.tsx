import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowCircleRightIcon, ClipboardListIcon } from '@heroicons/react/outline';
import Button from 'src/components/common/Button';
import UserCard from 'src/components/common/UserCard';
import User from '@lib/schemas/user';
import { Shell } from '../components/Layout';
import { useAuth } from '@hooks';

let DUMMY_USERS = [
  {
    img: 'https://images.generated.photos/iRuwtYmN2P_EvXn6VVSgHE15Fxy2xs-wDm2TE_0beLM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDIyNTU1LmpwZw.jpg',
    name: `Amanda Smith`,
    job: 'CEO',
    interests: ['Art', 'Dogs', 'Plants', 'Movies', 'Cars'],
    languages: ['English', 'French'],
    pronouns: 'They/Them',
    andtitle: 'CEO & Gamer',
    id: '3',
  },
  {
    img: 'https://images.generated.photos/MnMiiGGAKidu4MUWu15UmMuOMOZGXC4NpFf2h9WyJD8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE3NTUyLmpwZw.jpg',
    name: 'John Doe',
    job: 'Software Engineer',
    interests: ['Languages', 'Monkeys', 'Cats', 'Movies', 'Cars'],
    languages: ['English', 'French'],
    pronouns: 'He/Him',
    andtitle: 'Software Engineer & Musician',
    id: '2',
  },
  {
    img: 'https://images.generated.photos/vHZVKlqPeQiSeXYY75nKMtRCnLt6vTLu6SY6ITgbf9Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDIyNTU1LmpwZw.jpg',
    name: `Jane Jones`,
    job: 'UI/UX Designer',
    interests: ['Art', 'Dogs', 'Plants', 'Movies', 'Cars'],
    languages: ['English', 'French'],
    pronouns: 'She/Her',
    andtitle: 'UI/UX Designer & Gardener',
    id: '1',
  },
];

export default function Index() {
  const { firebaseUser, signOut } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<User | undefined>({
    img: 'https://images.generated.photos/403XQYVjUB0PcSlY_yboimeRFRe7hUyb2DsFGACtkb4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzQzNDY3LmpwZw.jpg',
    name: `Bin Cilin`,
    job: 'UI/UX Designer & Full Time Legend',
    interests: ['Art', 'Dogs', 'Plants', 'Movies', 'Cars'],
    languages: ['English', 'French'],
    pronouns: 'She/Her',
    andtitle: 'UI/UX Designer & Gamer',
    id: '1',
  });

  const fetchProfile = () => {
    return DUMMY_USERS.pop();
  };

  const changeProfileHandler = () => {
    // fetch a profile
    const fetchedProfile = fetchProfile();

    DUMMY_USERS = [fetchedProfile].concat(DUMMY_USERS);

    setProfile(fetchedProfile);
    // setProfiles([fetchedProfile].concat(profiles));
  };

  useEffect(() => {
    if (!firebaseUser) {
      router.push('/login');
    }
  });

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setProfile(fetchProfile());
  //   }, 1);

  //   return () => clearTimeout(timer);
  // });

  return (
    <Shell>
      <div className="flex flex-col items-center mt-4">
        <Link href="/scoreboard">
          <a className="flex justify-between items-center gap-2">
            <ClipboardListIcon className="w-7 h-7" />
            Scoreboard
          </a>
        </Link>
        <UserCard
          key={profile?.id}
          title={
            <h1 className="text-3xl text-slate-900 flex flex-row justify-between items-center">
              Profile
              <Button onClick={changeProfileHandler} className="mb-2">
                Next <ArrowCircleRightIcon className="w-7 h-7" />
              </Button>
            </h1>
          }
          user={profile}
        />
      </div>
    </Shell>
  );
}

// // export const getServerSideProps = useExampleProps();
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       user: {
// name: 'John Doe',
// job: 'Software Engineer',
// interests: ['Engineering', 'Cats', 'Plants', 'Movies', 'Cars'],
// languages: ['English', 'French'],
// pronouns: 'He/him',
// andtitle: 'Software Engineer & Gamer',
// id: '12',
//       },
//     }, // will be passed to the page component as props
//   };
// }
