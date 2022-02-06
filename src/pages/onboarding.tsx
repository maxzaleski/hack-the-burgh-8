import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { auth } from '@lib';
import { useSSR } from '@lib/useSSR';
import { LOGIN_PATH } from '@lib/common';
import { useAuth } from '@hooks';
import StepZero from '../components/forms/StepZero';
import StepOne from '../components/forms/StepOne';
import { CreateEventStep, EventCodeStep } from '../components/onboarding';

export default function OnboardingPage(props) {
  const [currentStep, setCurrentStep] = React.useState(0);

  const handleNextStep = (newData) => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = (newData) => {
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    // <EventCodeStep next={handleNextStep} data={data} errors={errors} />,
    <CreateEventStep next={handleNextStep} prev={handlePrevStep} />,
  ];
  return <div className="h-full bg-neutral-900 text-white">{steps[currentStep]}</div>;
}

export const getServerSideProps = useSSR(async (ctx, idToken) => {
  if (!idToken)
    return {
      redirect: {
        statusCode: 301,
        destination: './signin',
      },
      props: {} as never,
    };

  return {
    props: {},
  };
});
