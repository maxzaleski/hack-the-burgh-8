import { useState } from 'react'; 
import { useRouter } from 'next/router';

import StepZero from './StepZero';
import StepOne from './StepOne';

export default function SignUpForm() {

    const navigate = useRouter();
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        profilePicture: '',
        code: '',
        pronouns: '',
        interests: [],
        languages: [],
        jobTitle: '',
        andTitle: '',
        questionOne: '',
        questionTwo: '',
        questionThree: ''
    });
    const [step, setStep] = useState(0);
    
    const submissionRequest = (values) => {
        fetch('api/auth/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
            },
            body: JSON.stringify(values),
        })
        .then(res => res.json())
        .then(data => {
            if (!data.success) {
                if (data.errorStage === step) {
                    const newErrors = {}
                    data.errors.forEach(error => {
                        if (error.stepError === step) {
                            newErrors[error.field] = error.message
                        }
                    }); 
                    setErrors(newErrors);
                }
                setStep((prev) => prev + 1);
            } else {
                return true;
            }
        })
        .catch(err => console.log(err));
    }

    const handleNextStep = (newData) => {
        setErrors({});
        setData(prev => ({ ...prev, ...newData }));
        submissionRequest(newData);
    }
    
    const handlePrevStep = (newData) => {
        setData(prev => ({ ...prev, ...newData }));
        setStep((prev) => prev - 1);
    }

    const steps = [<StepZero next={handleNextStep} data={data} errors={errors}/>,
                    <StepOne next={handleNextStep} prev={handlePrevStep} data={data} errors={errors}/>];

    return (
        <div className="mx-6 md:mx-0 mt-12">
            {steps[step]}
        </div>
    );
    }