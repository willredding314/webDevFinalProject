import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Register = () => {

    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col gap-5 p-10 bg-white rounded-lg shadow-lg w-fit">
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-left text-gray text-md">Username</label>
                    <Input type="text" name="username" id="username" placeholder="Username" className="" />

                    <label htmlFor="password" className="text-left text-gray text-md">Email</label>
                    <Input type="email" name="email" id="email" placeholder="Email" className="" />

                    <label htmlFor="password" className="text-left text-gray text-md">Password</label>
                    <Input type="password" name="password" id="password" placeholder="Password" className="" />
                </div>

                <div className="flex flex-col gap-3">
                    <Button link="/register" children="Register" />

                    <div className="flex flex-row gap-1">
                        <p className="text-left text-md">Have an account?</p>
                        <Link href="/login"> 
                            <span className="text-left hover:text-[#F18F01] transition duration-400 ease-in-out text-md">Log in</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;