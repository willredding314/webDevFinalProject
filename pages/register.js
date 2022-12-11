// import Link from "next/link";
// import Input from "@/components/Input";
// import Button from "@/components/Button";
// import { useQuery } from "react-query";
// import { useState} from "react";
// import hash from "@/utils/hash";

// const Register = () => {

//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [verified, setVerified] = useState(false);
//     const [university, setUniversity] = useState('');
//     const [major, setMajor] = useState('');
//     // const [userErr, setUserErr] = useState(false);
//     // const [emailErr, setEmailErr] = useState(false);
//     // const [passErr, setPassErr] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(username, email, password, verified, university, major);
//         // return fetch('http://localhost:4000/api/auth/signup', {
//         //     method: 'POST',
//         //     headers: {
//         //         'Content-Type': 'application/json'
//         //     },
//         //     body: JSON.stringify({ 
//         //         username: username,
//         //         email: email,
//         //         password: hash(password),
//         //         bio: "", 
//         //         comments: [],
//         //         bookmarks: [],
//         //         friends: [],
//         //         loggedIn: false,
//         //         university: university,
//         //         major: major,
//         //         admin: false,
//         //         verified: verified,
//         //     credentials: 'include'
//         //     })
//         // })
//         // .then((res) => {
//         //     if (res.status === 200) {
//         //         return res.json();
//         //     } else if (res.status === 403) {
//         //         return "Username already exists"
//         //     }
//         // })
//         // .then((data) => {
//         //     console.log(data);
//         // })
//     }

//     return (
//         <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-5 p-20">
//             <div className="flex flex-col gap-5 p-10 bg-white rounded-lg shadow-lg w-fit">
            
//                 <div className="flex flex-col gap-2">
//                     <div className="flex flex-col gap-2">
//                         <label htmlFor="password" className="text-left text-gray text-md">Username</label>
//                         <Input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
//                     </div>
                    
//                     <div className="flex flex-col gap-2">
//                         <label htmlFor="password" className="text-left text-gray text-md">Email</label>
//                         <Input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
//                     </div>

//                     <div className="flex flex-col gap-2">
//                         <label htmlFor="password" className="text-left text-gray text-md">Password</label>
//                         <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
//                     </div>
//                 </div>

//                 <div className="flex items-center">
//                     <input checked={verified} onChange={(e) => setVerified(e.target.checked)} type="checkbox" name="verified" id="verified" className="w-4 h-4 text-[#F18F01] bg-gray-100 rounded border-gray-300 focus:ring-0" />
//                     <label htmlFor="verified" className="ml-2 text-sm font-medium text-gray">Are you a University Student?</label>
//                 </div>

//                 {verified && (
//                     <div className="flex flex-col gap-2">
//                         <div className="flex flex-col gap-2">
//                             <label htmlFor="password" className="text-left text-gray text-md">University</label>
//                             <Input type="text" name="university" id="university" placeholder="University" value={university} onChange={(e) => setUniversity(e.target.value)}   required={verified}/>
//                         </div>

//                         <div className="flex flex-col gap-2">
//                             <label htmlFor="password" className="text-left text-gray text-md">Major</label>
//                             <Input type="text" name="major" id="major" placeholder="Major" value={major} onChange={(e) => setMajor(e.target.value)} required={verified}/>
//                         </div>
//                     </div>
//                 )}

//                 <div className="flex flex-col gap-3">
//                     <Button link="/register" children="Register" type="submit" />

//                     <div className="flex flex-row gap-1">
//                         <p className="text-left text-md">Already have an account?</p>
//                         <Link href="/login">
//                             <span className="text-left text-[#F18F01] transition duration-400 ease-in-out text-md">Login</span>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </form>            
//     )
// }

// export default Register;

import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import bcrypt from 'bcryptjs';

const SignUpForm = () => {
    const router = useRouter();
    const [isUniversityStudent, setIsUniversityStudent] = useState(false);
    
    const { register, handleSubmit, errors } = useForm({
        validationSchema: Yup.object().shape({
        username: Yup.string()
            .matches(/^[a-zA-Z0-9]*$/, 'Username must only contain letters and numbers')
            .required('Username is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        university: Yup.string().when('isUniversityStudent', {
            is: true,
            then: Yup.string().required('University is required')
        }),
        major: Yup.string().when('isUniversityStudent', {
            is: true,
            then: Yup.string().required('Major is required')
        }),
        yearOfCollege: Yup.string().when('isUniversityStudent', {
            is: true,
            then: Yup.string().required('Year of college is required')
        })
        })
    });

    const mutate = useMutation(
        { onSuccess: () => router.push('/') },
        
        async (data) => {
            const response = await fetch('http://localhost:4000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: data.username,
                    email: data.email,
                    password: await bcrypt.hash(data.password, 10),
                    bio: '',
                    comments: [],
                    bookmarks: [],
                    friends: [],
                    loggedIn: true,
                    university: data.university,
                    major: data.major,
                    admin: false,
                    verified: data.isUniversityStudent,
                    yearOfCollege: data.yearOfCollege
                })
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            return response.json();
        },
    );

    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" ref={register}/>
                {/* {errors.username && <p>{errors.username.message}</p>} */}
    
            <label htmlFor="password">Password</label>

            <input type="password" name="password" id="password" ref={register}/>
            {/* {errors.password && <p>{errors.password.message}</p>} */}

            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" ref={register}/>
            {/* {errors.email && <p>{errors.email.message}</p>} */}

            <label>
                <input type="checkbox" name="isUniversityStudent" checked={isUniversityStudent} onChange={() => setIsUniversityStudent(!isUniversityStudent)} />
                I am a university student
            </label>

            {isUniversityStudent && (
                <>
                    <label htmlFor="university">University</label>
                    <input type="text" name="university" id="university" ref={register} />
                    {/* {errors.university && <p>{errors.university.message}</p>} */}

                    <label htmlFor="major">Major</label>
                    <input type="text" name="major" id="major" ref={register} />
                    {/* {errors.major && <p>{errors.major.message}</p>} */}

                    <label htmlFor="yearOfCollege">Year of College</label>
                    <input type="text" name="yearOfCollege" id="yearOfCollege" ref={register}/>
                    {/* {errors.yearOfCollege && <p>{errors.yearOfCollege.message}</p>} */}
                </>
            )}

            <button type="submit">Sign Up</button>
            {/* {error && <p>{error.message}</p>} */}
            {/* {loading && <p>Loading...</p>} */}
        </form>
    );
};

export default SignUpForm;
