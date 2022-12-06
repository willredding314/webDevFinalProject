import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useQuery } from "react-query";
import { useState} from "react";

const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [userErr, setUserErr] = useState(false);
    // const [emailErr, setEmailErr] = useState(false);
    // const [passErr, setPassErr] = useState(false);

    const register = useQuery('register', (user) => {
        return fetch('http://localhost:4000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, email: email, password: password })
        })
    })

    return (
        <div className="flex flex-row items-center justify-center p-20">
            <div className="flex flex-col gap-5 p-10 bg-white rounded-lg shadow-lg w-fit">
            
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-left text-gray text-md">Username</label>
                        <Input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-left text-gray text-md">Email</label>
                        <Input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-left text-gray text-md">Password</label>
                        <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <Button link="/register" children="Register" onClick={register.refetch} />

                    <div className="flex flex-row gap-1">
                        <p className="text-left text-md">Already have an account?</p>
                        <Link href="/login">
                            <span className="text-left text-[#F18F01] transition duration-400 ease-in-out text-md">Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
{/* 
<div className="flex flex-col items-center justify-center align-middle">
            <h1 className="p-3 text-4xl font-bold text-left">
                Register
            </h1>

            <div className="flex flex-col gap-5 p-10 bg-white rounded-lg shadow-lg w-fit">
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-left text-gray text-md">Username</label>
                    <Input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    
                    <label htmlFor="password" className="text-left text-gray text-md">Email</label>
                    <Input type="email" name="email" id="email" placeholder="Email" className="" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password" className="text-left text-gray text-md" >Password</label>
                    <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="flex flex-col gap-3">
                    <Button link="/register" children="Register" onClick={register.refetch} />

                    <div className="flex flex-row gap-1">
                        <p className="text-left text-md">Have an account?</p>
                        <Link href="/login"> 
                            <span className="text-left text-[#F18F01] transition duration-400 ease-in-out text-md">Log in</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div> */}

    //     <div>
    //     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
    //     <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Bob John" required />
    // </div>

//     <div class="flex items-center h-5">
//     <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
// </div>
// <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>