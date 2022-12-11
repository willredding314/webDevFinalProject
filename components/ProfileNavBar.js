import Button from "@/components/Button";
import { useRouter } from 'next/router'

const ProfileNavBar = ({ name }) => {

    const router = useRouter();

    return (
        <div className="flex flex-row justify-between w-full gap-10 p-5">
            <div className="flex flex-row gap-5">
                <Button link="/" children="Home" disabled={router.pathname === "/"} />
            </div>

            <div className="flex flex-row gap-5 ">
                <Button link="/profile" children="Profile" />
                <h1>{name}</h1>
            </div>
        </div>
    )
}

export default ProfileNavBar;