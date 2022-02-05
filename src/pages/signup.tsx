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
        <div>
            <div className="mt-16 mb-10"  data-aos="fade-up">
            <div className="m-auto text-center">
                <Link href="/"><Logo /></Link>
            </div>
            <div className="pt-16"></div>
            <SignupForm />
        </div>
        </div>
    );
}