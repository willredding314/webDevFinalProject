import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useQuery } from "react-query";
import { useState} from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);

    const login = useQuery('register', () => {
        const user = { email: email, password: password}

        if (user.email === '' || user.password === '') {
            setErr(true);
        }
        return fetch('http://localhost:4000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    })

    return (
        <div className="flex flex-row items-center justify-center p-20">
            <div className="flex flex-col gap-5 p-10 bg-white rounded-lg shadow-lg w-fit">
            
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-left text-gray text-md">Email</label>
                    <Input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password" className="text-left text-gray text-md">Password</label>
                    <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="flex flex-col gap-3">
                    <Button link="/login" children="Login" onClick={login.refetch} />

                    <div className="flex flex-row gap-1">
                        <p className="text-left text-md">Don't have an account?</p>
                        <Link href="/register"> 
                            <span className="text-left text-[#F18F01] transition duration-400 ease-in-out text-md">Register</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;