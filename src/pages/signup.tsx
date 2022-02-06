import React from 'react';
import 'firebase/auth';

import Link from 'next/link';

import { auth } from '@lib';
import { useSSR } from '@lib/useSSR';
import { useRouter } from 'next/router';

import SignupForm from '../components/forms/SignUpForm';

import { Logo } from '../components/common';

export default function SignUp() {
    return (
        <div className="bg-black">
        <div className="pt-16 pb-10"  data-aos="fade-up">
            <div className="m-auto text-center">
                <Logo />
            </div>
            <SignupForm />
        </div>
        </div>
    );
}