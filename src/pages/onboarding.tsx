import React from 'react';
import { useSSR } from '@lib/useSSR';
import { CompleteDetailsStep, CreateEventStep } from '../components/onboarding';

export default function OnboardingPage(props) {
  const [currentStep, setCurrentStep] = React.useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    <CreateEventStep next={handleNextStep} />,
    <CompleteDetailsStep next={handleNextStep} prev={handlePrevStep} />,
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
