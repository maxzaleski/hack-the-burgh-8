import React from 'react';
import 'firebase/auth';

import SignupForm from '../components/forms/SignUpForm';

import { Logo } from '../components/common';

export default function SignUp() {
  return (
    <div className="bg-neutral-900 h-full">
      <div className="pt-16" data-aos="fade-up">
        <div className="m-auto text-center">
          <Logo />
        </div>
        <SignupForm />
      </div>
    </div>
  );
}
