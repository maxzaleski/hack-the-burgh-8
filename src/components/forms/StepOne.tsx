import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Button } from '../../components/common';
import { stepOneSchema } from './signup-schema';

export default function StepOne(props) {
    const handleSubmit = (values, helpers) => {
        helpers.setTouched({});
        props.next(values);
    };

    return (
        <div>
        <Formik
            validationSchema={stepOneSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >{({values, touched}) => (
            <div>
            <div className="absolute top-0 left-6">
            <button type="button" onClick={() => {props.prev(values)}}>
                <svg xmlns="http:www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            </div>
            <div data-aos="fade-left">
            <p className="md:text-2xl md:pt-8 text-2xl text-gray-400 p-3 text-center">Next, setup your account.</p>
            <Form className="w-full max-w-sm m-auto mt-10">
                        {/* input start */}
                            <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Code
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" name="code" id="code" type="code"  placeholder="123456"/>
                            <ErrorMessage name="code" component="div" className="text-red-500 text-xs italic"/>
                            </div>
                        </div>
                        {/* end input*/}
                        {/* input start */}
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="username">
                                Pronouns
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" name="username" id="username" type="text" placeholder='She/Her'/>
                            <ErrorMessage name="username" component="div" className="text-red-500 text-xs italic"/>
                            {
                                (props.errors.hasOwnProperty('pronouns') && !touched.pronouns) && (
                                    <p className="text-red-500 text-xs italic">{props.errors.pronouns}</p>
                                )
                            }
                            </div>
                        </div>
                        {/* end input*/}
                        {/* input start */}
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="insterests">
                                Interests
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" name="interests" id="interests" type="text" placeholder='Baseball'/>
                            <ErrorMessage name="username" component="div" className="text-red-500 text-xs italic"/>
                            {
                                (props.errors.hasOwnProperty('interests') && !touched.interests) && (
                                    <p className="text-red-500 text-xs italic">{props.errors.interests}</p>
                                )
                            }
                            </div>
                        </div>
                        {/* end input*/}
                        {/* input start */}
                            <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                                Languages
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" name="languages" id="languages" type="text" placeholder='Chinese'/>
                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic"/>
                            {
                                (props.errors.hasOwnProperty('email') && !touched.email) && (
                                    <p className="text-red-500 text-xs italic">{props.errors.email}</p>
                                )
                            }
                            </div>
                        </div>
                        {/* end input*/}
                        {/* input start */}
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="jobTitle">
                                Job Title
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" name="jobTitle" id="jobTitle" type="text" placeholder='Software Developer'/>
                            <ErrorMessage name="jobTitle" component="div" className="text-red-500 text-xs italic"/>
                            {
                                (props.errors.hasOwnProperty('jobTitle') && !touched.jobTitle) && (
                                    <p className="text-red-500 text-xs italic">{props.errors.jobTitle}</p>
                                )
                            }
                            </div>
                        </div>
                        {/* end input*/}
                        {/* input start */}
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="jobTitle">
                                Job Title
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black" name="jobTitle" id="jobTitle" type="text" placeholder='Software Developer'/>
                            <ErrorMessage name="jobTitle" component="div" className="text-red-500 text-xs italic"/>
                            {
                                (props.errors.hasOwnProperty('jobTitle') && !touched.jobTitle) && (
                                    <p className="text-red-500 text-xs italic">{props.errors.jobTitle}</p>
                                )
                            }
                            </div>
                        </div>
                        {/* end input*/}
                        <div className="text-center md:text-left md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="mt-8 md:w-2/3">
                            <Button title="submit"/>
                        </div>
                        </div>
                        </Form>
                        </div>
        </div>
        )
    }</Formik>
    </div>
    );
}