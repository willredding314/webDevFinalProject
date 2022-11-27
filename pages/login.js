import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Login = () => {

    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col bg-white rounded-lg shadow-lg p-10 w-fit gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-left text-gray text-md">Email</label>
                    <Input type="email" name="email" id="email" placeholder="Email" className="" />

                    <label htmlFor="password" className="text-left text-gray text-md">Password</label>
                    <Input type="password" name="password" id="password" placeholder="Password" className="" />
                </div>

                <div className="flex flex-col gap-3">
                    <Button link="/login" children="Login" />

                    <div className="flex flex-row gap-1">
                        <p className="text-left text-md">Don't have an account?</p>
                        <Link href="/register"> 
                            <span className="text-left hover:text-[#F18F01] transition duration-400 ease-in-out text-md">Register</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

{/* <div className="flex flex-row items-center justify-center p-10">
<div className="flex flex-row gap-5 mt-2 p-10 w-full max-w-3xl">
    <div className="flex flex-col gap-2 p-5 bg-cultured rounded-lg drop-shadow-sm  max-w-2xl">
        <label htmlFor="password" className="text-left text-eerie-black text-md">Username</label>
        <Input type="username" name="username" id="username" placeholder="username" className="bg-cultured font-normal py-2 px-4 rounded shadow-md transition duration-200 ease-in-out" />
        
        <label htmlFor="email" className="text-left text-eerie-black text-md">Email</label>
        <Input type="email" name="email" id="email" placeholder="Email" className="bg-cultured font-normal py-2 px-4 rounded shadow-md transition duration-200 ease-in-out" />

        <label htmlFor="password" className="text-left text-eerie-black text-md">Password</label>
        <Input type="password" name="password" id="password" placeholder="Password" className="bg-cultured font-normal py-2 px-4 rounded shadow-md transition duration-200 ease-in-out" />

        <Button link="/register" children="Register"/>
        <div className="flex flex-row gap-1">
            <p className="text-left text-eerie-black text-md">Already have an account?</p>
            <Link href="/login"> 
                <span className="text-left text-eerie-black text-md">Log in</span>
            </Link>
        </div>
    </div> 
</div>
</div> */}