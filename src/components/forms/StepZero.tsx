import { useState } from 'react'; 
import { useRouter } from 'next/router';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { stepZeroSchema } from './signup-schema';
import { ButtonNext } from '../../components/common';

export default function StepZero(props) {
    const handleSubmit = (values, helpers) => {
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
            <div data-aos="fade-left">
            <p className="md:text-2xl md:pt-8 text-2xl text-gray-400 p-3 text-center">First, let's get to know you.</p>
            <Form className="w-full max-w-sm m-auto mt-10">
                         {/* input start */}
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="username">
                                First Name
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" name="username" id="username" type="text" placeholder='Bobby'/>
                            <ErrorMessage name="username" component="div" className="text-red-500 text-xs italic"/>
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
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="username">
                                Last Name
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" name="username" id="username" type="text" placeholder='Shmurda'/>
                            <ErrorMessage name="username" component="div" className="text-red-500 text-xs italic"/>
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
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                                Email
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" name="email" id="email" type="text" placeholder='bobby@andmedia.com'/>
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
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                                Password
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" name="password" id="password" type="password" placeholder="********"/>
                            <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic"/>
                            </div>
                        </div>
                        {/* end input*/}
                        {/* input start */}
                    <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                                Confirm
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" name="confirmPassword" id="confirmPassword" type="password"  placeholder="********"/>
                            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs italic"/>
                            </div>
                        </div>
                        {/* end input*/}
                        {/* input start */}
                    <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="profilePicture">
                                Profile Picture
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" name="profilePicture" id="profilePicture" type="profilePicture"  placeholder="test"/>
                            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs italic"/>
                            </div>
                        </div>
                        {/* end input*/}
                        <div className="text-center md:text-left md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="mt-8 md:w-2/3">
                        <ButtonNext title="next" />
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