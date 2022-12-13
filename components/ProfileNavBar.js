import Button from "@/components/Button";
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from "next/link";

const ProfileNavBar = ({ user }) => {

    const router = useRouter();

    console.log('user', user)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const signOut = () => {
        console.log('signing out');
        const response = fetch('http://localhost:4000/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()  
        });

        if (response.status === 200) {
            router.push('/');
        } else {
            console.log('error signing out');
        }
    }
    
    return (
        <div className="z-40 flex flex-row justify-between w-full gap-10 p-5">
            <div className="flex flex-row gap-5">
                <Link href="/" disabled={router.pathname === "/"} passHref>
                    <button className="relative flex items-center justify-center w-10 h-10 text-gray-500 rounded-full hover:text-gray-700 ">
                        Home
                    </button>
                </Link>
            </div>

            <div className="flex flex-col items-end gap-5">
                
                <button className="relative flex items-center justify-center w-10 h-10 text-gray-500 rounded-full hover:text-gray-700 " id="dropdownAvatarNameButton" aria-expanded="false" aria-haspopup="true" onClick={toggleDropdown}>
                    {user.username}
                </button>

                {dropdownOpen && (
                    <div className="absolute mt-12 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none focus:outline-none">
            

                    <div className="z-40 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div className="font-medium ">{user.verified ? "Verified" : "Not Verified"} | {user.admin ? "Admin" : "User"}</div>
                        <div className="truncate">{user.email}</div>
                        <div className="truncate">{user.university}</div>
                        </div>
                        <ul className="z-40 py-1 text-sm text-gray-700">
                            <Link href="/profile" className="z-40 block px-4 py-2 hover:bg-gray-100" passHref>
                                Profile
                            </Link>
                            <Link href="/settings" className="z-40 block px-4 py-2 hover:bg-gray-100" passHref>
                                Settings
                            </Link>
                        </ul>
                        <div className="py-1 hover:bg-gray-100">
                            <button className="z-40 block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100" onClick={signOut}>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>

                )}

        </div>
    </div>
    )
}

export default ProfileNavBar;


