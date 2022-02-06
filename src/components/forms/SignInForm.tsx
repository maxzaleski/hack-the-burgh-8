import {useRouter} from 'next/router';
import { useState } from 'react'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { WhiteButton } from '../../components/common';

import { GoogleLogin } from 'react-google-login';

export default function SignInForm() {
    const navigate = useRouter();
    const [error, setError] = useState(null);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
    },
    validationSchema: Yup.object({
        username: Yup.string()
            .required('Username required'),
        password: Yup.string()
            .required('Password required')
    }),
    onSubmit: values => {
        fetch('/auth/signin', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify(values),
        })
        .then(res => res.json())
        .then(data => { // something going on here wih jwt
            if(data.success) {
                localStorage.setItem('token', data.token);
                navigate.push('/dashboard');
                return;
            }
                setError(data.message);
                return;
            }
        ).catch(err => console.log(err, err.stack));
    },})

    return (
        <div>
        <form onSubmit={formik.handleSubmit} className="w-full max-w-sm m-auto mt-10">
        {/* input start */}
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="username">
                Username
            </label>
            </div>
            <div className="md:w-2/3">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username} className={formik.touched.username && formik.errors.username ? "bg-gray-200 appearance-none border border-red-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" : "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"} id="username" name="username" type="text" maxLength="30"/>
            {formik.touched.username && formik.errors.username ? <p className="text-red-500 text-xs italic">{formik.errors.username}</p>: null}
            </div>
        </div>
        {/* end input*/}
        {/* input start */}
            <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-200 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="tiktok">
                Password
            </label>
            </div>
            <div className="md:w-2/3">
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className={formik.touched.password && formik.errors.password ? "bg-gray-200 appearance-none border border-red-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" : "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"} id="password" name="password" type="password" maxLength="30"/>
            {formik.touched.password && formik.errors.password ? <p className="text-red-500 text-xs italic">{formik.errors.password}</p> : null}
            </div>
        </div>
        <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3 text-gray-300 hover:text-gray-100">
        <Link href="/signup">New to ice? Sign Up</Link>
        </div>
        </div>
        {/* end input*/}
        <p className="text-center text-red-500 text-xs italic">{error}</p>
        <div className="text-center md:text-left md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="mt-8 md:w-2/3">
            <div className="inline-flex items-center" >

            <WhiteButton title="Sign In"/>
            </div>
             <div>
                 <h1 className="text-white text-xl pt-12">
                    Or Login with Google
                    <svg className="fill-white ml-1 inline-block align-middle" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="24" height="24"
                viewBox="0 0 24 24">    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path></svg>
                     </h1>
             </div>
        </div>
        </div>
        </form>
        </div>
    );
}