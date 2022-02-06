import React, { Fragment } from 'react';
import QRCode from 'react-qr-code';
import Image from 'next/image';
import Card from './Card';
import Pill from './Pill';

export default function UserCard(props) {
  return (
    <Fragment>
      <div className="p-8 w-full">
        {props.title}
        <div className="flex justify-center items-center">
          <Image src={props.user.img} className="rounded-full" height={150} width={150} />
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="bg-blue-600 rounded-full text-white max-w-fit p-2 relative top-4">
          <p>{props.user?.andtitle}</p>
        </div>
      </div>
      <div className="bg-slate-100 p-8 space-y-8">
        {/* <Image href={user.img} /> */}
        <Card>
          <div className="flex">
            <h1 className="flex-start flex-grow text-slate-900 text-xl">{props.user?.name}</h1>
            <p>{props.user?.pronouns}</p>
          </div>
          <h3 className="flex-end text-slate-600 text-lg mb-2">{props.user?.job}</h3>
          <h3>Interests</h3>
          <div className="flex flex-row flex-wrap">
            {props.user?.interests?.map((interest) => (
              <Pill key={Math.random()} text={interest} />
            ))}
          </div>
        </Card>
        <Card>
          <h2>Languages</h2>
          <div className="flex flex-row flex-wrap">
            {props.user?.languages?.map((language) => (
              <Pill key={Math.random()} text={language} />
            ))}
          </div>
        </Card>
        <Card>
          <h2>QR Code</h2>
          <div className="flex mt-2 justify-center">
            <QRCode value={`${props.user?.id}`} />
          </div>
        </Card>
        {props.extra}
      </div>
    </Fragment>
  );
}
