import SignInForm from '../components/forms/SignInForm';

import { WelcomeToIce } from '../components/common';

export default function SignIn() {
  return (
    <div className="bg-neutral-900">
      <div className="pt-32 min-h-screen" data-aos="fade-up">
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
