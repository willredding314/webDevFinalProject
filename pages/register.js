// import Link from "next/link";
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
import Input from "@/components/Input";
import Button from "@/components/Button";

const SignUpForm = () => {
    const router = useRouter();
    const [isUniversityStudent, setIsUniversityStudent] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [verified, setVerified] = useState(false);
    const [university, setUniversity] = useState('');
    const { register, handleSubmit, errors } = useForm();

    const vusername = {
        required: 'Username is required',
        pattern: {
            value: /^[a-zA-Z0-9]*$/,
            message: 'Username must only contain letters and numbers',
        },
    }

    const onSubmit = async (data) => {
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
                university: '',
                major: '',
                admin: false,
                verified: false,
            })
        });

        const user = await response.json();
        console.log(user);
        return user;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row items-center justify-center p-20">
            <div className="flex flex-col gap-5 p-10 bg-white rounded-lg shadow-lg w-fit">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="username" className="text-left text-gray text-md">Username</label>
                        <input className="px-5 py-2 font-normal transition duration-200 ease-in-out rounded bg-cultured text-eerie-dark" type="text" name="username" id="username" placeholder="Username" />
                        {errors?.username && <p className="text-sm text-red-500">{errors.username.message}</p> }
                    </div>  
        
                    {/* <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-left text-gray text-md">Password</label>
                        <input className="px-5 py-2 font-normal transition duration-200 ease-in-out rounded bg-cultured text-eerie-dark" type="password" name="password" id="password" placeholder="Password" ref={register}/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-left text-gray text-md">Email</label>
                        <input className="px-5 py-2 font-normal transition duration-200 ease-in-out rounded bg-cultured text-eerie-dark" type="email" name="email" id="email" placeholder="Email" ref={register}/>
                    </div> */}

                    {/* <div className="flex items-center">
                        <input type="checkbox" name="isUniversityStudent" checked={isUniversityStudent} onChange={() => setIsUniversityStudent(!isUniversityStudent)} />
                        <label htmlFor="verified" className="ml-2 text-sm font-medium text-gray">Are you a University Student?</label>
                    </div> */}
                    
                    <button className="px-5 py-2 font-normal transition duration-200 ease-in-out rounded bg-[#F18F01] text-white" type="submit">Register</button>
                    {/* <Button link="/register" children="Register" /> */}
                    {/* {error && <p>{error.message}</p>} */}
                    {/* {loading && <p>Loading...</p>} */}
                </div>
            </div>
        </form>

    );
};

export default SignUpForm;
