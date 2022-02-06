import { Form, Formik } from 'formik';
import { stepZeroSchema } from './signup-schema';
import { WhiteButton } from '../common';
import Link from 'next/link';
import { OnboardingInput } from '../common/OnboardingInput';

export default function StepZero(props) {
  const handleSubmit = (values, helpers) => {
    helpers.setTouched({});
    props.next(values);
    helpers.setSubmitting(false);
  };

  return (
    <div>
      <Formik
        validationSchema={stepZeroSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
        validateOnBlur>
        {(formik) => (
          <div>
            <div className="absolute top-6 left-6">
              <Link href="/signin">
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-200 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Link>
            </div>
            <div>
              <p className="md:text-2xl md:mt-8 text-2xl text-gray-200 m-3 text-center">
                First, let's get to know you.
              </p>
              <Form className="w-full max-w-sm m-auto mt-10">
                {/* input start */}
                <OnboardingInput
                  id="name-input"
                  label="Name"
                  name="name"
                  placeholder="John Doe"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values?.name}
                  touched={formik.touched.name as boolean}
                  error={formik.errors?.name as string}
                />
                {/* end input*/}
                {/* input start */}
                <OnboardingInput
                  id="pronouns-input"
                  label="Pronouns"
                  name="pronouns"
                  placeholder="he/him"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values?.pronouns}
                  touched={formik.touched.pronouns as boolean}
                  error={formik.errors?.pronouns as string}
                />
                {/* input end */}
                {/* input start */}
                <OnboardingInput
                  id="email-input"
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="john@doe.htb8"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values?.email}
                  touched={formik.touched.email as boolean}
                  error={formik.errors?.email as string}
                />
                {/* end input*/}
                {/* input start */}
                <OnboardingInput
                  id="password-input"
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="•••••••••"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values?.password}
                  touched={formik.touched.password as boolean}
                  error={formik.errors?.password as string}
                />
                {/* end input*/}
                {/* input start */}
                <OnboardingInput
                  id="confirm-input"
                  label="Confirm Password"
                  name="confirm"
                  type="password"
                  placeholder="•••••••••"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values?.confirm}
                  touched={formik.touched.confirm as boolean}
                  error={formik.errors?.confirm as string}
                />
                {/* end input*/}
                <div className="text-center md:text-left md:flex md:items-center">
                  <div className="mt-8 md:w-2/3">
                    <WhiteButton title="Next" />
                  </div>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
