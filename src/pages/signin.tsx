import { useLayoutEffect } from 'react';

import SignInForm from '../components/forms/SignInForm';

import Link from 'next/link';

import { WelcomeToIce } from '../components/common';

export default function SignIn () {
    return (
        <div className="bg-black">
        <div className="pt-32 min-h-screen mx-auto"  data-aos="fade-up">
            <div className="mx-10 text-center">
                <WelcomeToIce />
            </div>
            <div className="mx-10">
                <SignInForm />
            </div>
        </div>
        </div>
    );
}