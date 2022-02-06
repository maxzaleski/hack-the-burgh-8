import * as Yup from 'yup';

const stepZeroSchema = Yup.object({
    firstName: Yup.string()
        .required('First name is required')
        .max(16, 'First name must be 16 characters or less'),
    lastName: Yup.string()
        .required('Last name is required')
        .max(16, 'Last name must be 16 characters or less'),
    email: Yup.string().email("Must be a valid email").required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .max(16, 'Password must be at most 16 characters long')
        .matches(
            /.*[0-9].*/,
            "Must contain a number"
        ),
    confirmPassword: Yup.string().required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const stepOneSchema = Yup.object({
    code: Yup.string()
        .required('Code is required')
        .max(6, 'Code must be 6 characters or less'),
    pronouns: Yup.string()
})

export { stepZeroSchema, stepOneSchema };