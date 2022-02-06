import React from 'react';
import { useSSR } from '@lib/useSSR';
import { CompleteDetailsStep, CreateEventStep } from '../components/onboarding';
import { useRouter } from 'next/router';

export default function OnboardingPage(props) {
  const router = useRouter();
  let { step } = router.query;
  if (step == undefined) step = '0';

  const handleNextStep = () => {
    router.push('/onboarding?step=1')
  };

  const handlePrevStep = () => {
    router.push('/onboarding?step=0')
  };

  const steps = [
    <CreateEventStep next={handleNextStep} />,
    <CompleteDetailsStep next={handleNextStep} prev={handlePrevStep} />,
  ];
  return <div className="h-full bg-neutral-900 text-white">{steps[Number(step)]}</div>;
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
