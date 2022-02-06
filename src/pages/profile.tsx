import Card from 'src/components/profile/Card';
import Pill from 'src/components/profile/Pill';
import Image from 'next/image';
import Button from 'src/components/common/Button';

interface Props {
  user: {
    img: any;
    name: string;
    job: string;
    interests: string[];
    pronouns: string;
    languages: string[];
    andtitle: string;
  };
}

export default function Profile({ user }: Props) {
  return (
    <>
      <div className="p-8">
        <div className="flex justify-center items-center my-4">
          <Image src="/and.png" height={40} width={200} />
        </div>
        <hr className="bg-slate-300 m-4" />
        <h1 className="text-3xl text-slate-900">Profile</h1>
        <div className="flex justify-center items-center">
          <Image src="/profile.png" className="rounded-full" height={150} width={150} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-red-600 rounded-full text-white max-w-fit p-2 relative top-4">
          <p>{user.andtitle}</p>
        </div>
      </div>
      <div className="bg-slate-100 p-8 space-y-8">
        {/* <Image href={user.img} /> */}
        <Card>
          <div className="flex">
            <h1 className="flex-start flex-grow text-slate-900 text-xl">{user.name}</h1>
            <p>{user.pronouns}</p>
          </div>
          <h3 className="flex-end text-slate-600 text-lg mb-2">{user.job}</h3>
          <h3>Interests</h3>
          <div className="flex flex-row flex-wrap">
            {user.interests.map((interest) => (
              <Pill text={interest} />
            ))}
          </div>
        </Card>
        <Card>
          <h2>Languages</h2>
          <div className="flex flex-row flex-wrap">
            {user.languages.map((language) => (
              <Pill text={language} />
            ))}
          </div>
        </Card>
        <Button title="Show QR Code" className="w-full" />
      </div>
    </>
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
      },
    }, // will be passed to the page component as props
  };
}
