import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Button } from '../../components/common';
import { stepOneSchema } from './signup-schema';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const jobTitle =
[
{ value: 'Accountant', label: 'Accountant' },
{ value: 'Associate', label: 'Associate' },
{ value: 'Product Analyst', label: 'Product Analyst' },
{ value: 'Tech Lead', label: 'Tech Lead' },
{ value: 'Software Engineer', label: 'Software Engineer' }
]

const andTitle = 
[
    { value: 'Cat Person', label: 'Cat Person' },
    { value: 'Gamer', label: 'Gamer' },
    { value: 'Hacker', label: 'Hacker' },
    { value: 'Hipster', label: 'Hipster' },
    { value: 'Hustler', label: 'Hustler' },
    { value: 'Programmer', label: 'Programmer' },
    { value: 'Writer', label: 'Writer' },
    { value: 'Runner', label: 'Runner' },
    { value: 'Photographer', label: 'Photographer' },
    { value: 'Fitnesss Freak', label: 'Fitness Freak' }
    ]

    const interests = 
    [
        { value: 'Sports', label: 'Sports' },
        { value: 'Cooking', label: 'Cooking' },
        { value: 'Writing', label: 'Writing' },
        { value: 'Netflix', label: 'Netflix' },
        { value: 'Shopping', label: 'Shopping' },
        { value: 'Learning', label: 'Learning' },
        { value: 'Reading', label: 'Reading' }
        ]
        
    const languages = 
        [
            { value: 'English', label: 'English' },
            { value: 'Spanish', label: 'Spanish' },
            { value: 'French', label: 'French' },
            { value: 'Chinese', label: 'Chinese' },
            { value: 'German', label: 'German' }
            ]
    
export default function StepOne(props) {
    const handleSubmit = (values, helpers) => {
        helpers.setTouched({});
        props.next(values);
    };

    return (
        <div>
        <h1>Hello</h1>
        <Formik
            validationSchema={stepOneSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
        >{({values, touched}) => (
            <div>
                <div className="absolute top-10 left-6">
                <button type="button" onClick={() => {props.prev(values)}}>
                    <svg xmlns="http:www.w3.org/2000/svg" className="h-10 w-10 text-gray-200 hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                </div>
            <div>
            <p className="md:text-2xl md:pt-8 text-2xl text-gray-200 p-3 text-center">Next, setup your account.</p>
            <Form className="w-full max-w-sm m-auto mt-10">
                        {/* input start */}
                            <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                Code
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="code" id="code" type="code"  placeholder="123456"/>
                            <ErrorMessage name="code" component="div" className="text-red-500 text-xs italic"/>
                            </div>
                        </div>
                        {/* end input*/}
                        {/* input start */}
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="username">
                                Pronouns
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="username" id="username" type="text" placeholder='She/Her'/>
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
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="insterests">
                                Interests
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Select placeholder="Select Interests..." isMulti options={interests} components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}/>
                            {/* <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="interests" id="interests" type="text" placeholder='Baseball'/> */}
                            <ErrorMessage name="interests" component="div" className="text-red-500 text-xs italic"/>
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
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                                Languages
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Select placeholder="Select Languages..." isMulti options={languages} components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}/>
                            {/* <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="languages" id="languages" type="text" placeholder='Chinese'/> */}
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
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="jobTitle">
                                Job Title
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Select options={jobTitle} placeholder="Associate"/>
                            {/* <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="jobTitle" id="jobTitle" type="text" placeholder='Software Developer'/> */}
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
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="jobTitle">
                                And Title
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Select options={andTitle} placeholder="Gamer"/>
                            {/* <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="andTitle" id="andTitle" type="text" placeholder='Gamer'/> */}
                            <ErrorMessage name="andTitle" component="div" className="text-red-500 text-xs italic"/>
                            {
                                (props.errors.hasOwnProperty('andTitle') && !touched.andTitle) && (
                                    <p className="text-red-500 text-xs italic">{props.errors.andTitle}</p>
                                )
                            }
                            </div>
                        </div>
                        {/* end input*/}
                        <div className="md:text-2xl md:pt-8 text-2xl text-gray-200 p-3 pb-12 text-center">
                            <h1>A Couple More Questions</h1>
                        </div>
                        {/* input start */}
                            <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="username">
                                What is your favorite colour?
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="questionOne" id="questionOne" type="text" placeholder='Red'/>
                            <ErrorMessage name="username" component="div" className="text-red-500 text-xs italic"/>
                            {
                                (props.errors.hasOwnProperty('questionOne') && !touched.questionOne) && (
                                    <p className="text-red-500 text-xs italic">{props.errors.questionOne}</p>
                                )
                            }
                            </div>
                        </div>
                        {/* end input*/}
                        {/* input start */}
                            <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="username">
                                Where is your dream holiday?
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="questionTwo" id="questionTwo" type="text" placeholder='Geneva'/>
                            <ErrorMessage name="questionTwo" component="div" className="text-red-500 text-xs italic"/>
                            {
                                (props.errors.hasOwnProperty('questionTwo') && !touched.questionTwo) && (
                                    <p className="text-red-500 text-xs italic">{props.errors.questionTwo}</p>
                                )
                            }
                            </div>
                        </div>
                        {/* end input*/}
                                                {/* input start */}
                                                <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                            <label className="block text-gray-300 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="questionThree">
                                What is your favourite animal?
                            </label>
                            </div>
                            <div className="md:w-2/3">
                            <Field className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="questionThree" id="questionThree" type="text" placeholder='Zebra'/>
                            <ErrorMessage name="username" component="div" className="text-red-500 text-xs italic"/>
                            {
                                (props.errors.hasOwnProperty('questionThree') && !touched.questionThree) && (
                                    <p className="text-red-500 text-xs italic">{props.errors.questionThree}</p>
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