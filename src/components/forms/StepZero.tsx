import { useState } from 'react'; 
import { useRouter } from 'next/router';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { stepZeroSchema } from './signup-schema';
import { ButtonNext } from '../../components/common';
import Link from 'next/link'; 

export default function StepZero(props) {
    const handleSubmit = (values, helpers) => {
        console.log('test');
        helpers.setTouched({});
        props.next(values);
    };

    return (
        <div>
        <Formik
            validationSchema={stepZeroSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >{({values, touched}) => (
            <div>
            <div className="absolute top-6 left-6">
            <Link href="/signin">
                <svg xmlns="http:www.w3.org/2000/svg" className="h-10 w-10 text-gray-200 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </Link>
            </div>
            <div>
            <p className="md:text-2xl md:mt-8 text-2xl text-gray-200 m-3 text-center">First, let's get to know you.</p>
            <Form className="w-full max-w-sm m-auto mt-10">
                         {/* input start */}
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="firstName">
                                First Name
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="firstName" id="firstName" type="text" placeholder='Bobby'/>
                            <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs italic"/>
                            {
                                (props.errors.hasOwnProperty('firstName') && !touched.firstName) && (
                                    <p className="text-red-500 text-xs italic">{props.errors.firstName}</p>
                                )
                            }
                            </div>
                        </div>
                        {/* end input*/}
                        {/* input start */}
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lastName">
                                Last Name
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="lastName" id="lastName" type="text" placeholder='Shmurda'/>
                            <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs italic"/>
                            {
                                (props.errors.hasOwnProperty('lastName') && !touched.lastName) && (
                                    <p className="text-red-500 text-xs italic">{props.errors.lastName}</p>
                                )
                            }
                            </div>
                        </div>
                        {/* end input*/}
                        {/* input start */}
                            <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                                Email
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" id="email" type="text" placeholder='bobby@andmedia.com'/>
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
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                                Password
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="password" id="password" type="password" placeholder="********"/>
                            <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic"/>
                            </div>
                        </div>
                        {/* end input*/}
                        {/* input start */}
                    <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="confirmPassword">
                                Confirm
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="confirmPassword" id="confirmPassword" type="password"  placeholder="********"/>
                            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs italic"/>
                            </div>
                        </div>
                        {/* end input*/}
                        <div className="text-center md:text-left md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="mt-8 md:w-2/3">
                        <ButtonNext title="next"/>
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