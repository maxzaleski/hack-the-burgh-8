import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { auth } from '@lib';
import { useSSR } from '@lib/useSSR';
import { LOGIN_PATH } from '@lib/common';
import { useAuth } from '@hooks';
import StepZero from '../components/forms/StepZero';
import StepOne from '../components/forms/StepOne';
import { CreateEventStep, EventCodeStep } from '../components/onboarding';

export default function OnboardingPage() {
  const { tokenClaims } = useAuth();
  const navigate = useRouter();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: '',
    code: '',
    pronouns: '',
    interests: [],
    languages: [],
    jobTitle: '',
    andTitle: '',
    questionOne: '',
    questionTwo: '',
    questionThree: '',
  });
  const [step, setStep] = useState(0);

  const submissionRequest = (values) => {
    fetch('api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          if (data.errorStage === step) {
            const newErrors = {};
            data.errors.forEach((error) => {
              if (error.stepError === step) {
                newErrors[error.field] = error.message;
              }
            });
            setErrors(newErrors);
          }
          setStep((prev) => prev + 1);
        } else {
          return true;
        }
      })
      .catch((err) => console.log(err));
  };

  const handleNextStep = (newData) => {
    setErrors({});
    setData((prev) => ({ ...prev, ...newData }));
    if (step === 1) {
      submissionRequest(newData);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setStep((prev) => prev - 1);
  };

  const steps = [
    // <EventCodeStep next={handleNextStep} data={data} errors={errors} />,
    <CreateEventStep next={handleNextStep} prev={handlePrevStep} data={data} errors={errors} />,
  ];
  return <div className="h-full bg-neutral-900 text-white">{steps[step]}</div>;
}

export const getServerSideProps = useSSR(async (ctx, idToken) => {
  if (!idToken)
    return {
      redirect: {
        statusCode: 301,
        destination: LOGIN_PATH,
      },
      props: {} as never,
    };

  return { props: {} };
});
