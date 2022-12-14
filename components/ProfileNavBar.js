import Button from "@/components/Button";
import { useRouter } from 'next/router'
import {useContext} from "react";
import {CurrentUserContext} from "@/components/CurrentUserProvider";

const ProfileNavBar = ({ user }) => {

  let { currentUser } = useContext(CurrentUserContext);

  const Logout = () => {

  }

  const router = useRouter();
    return (
        <div className="flex flex-row justify-between w-full gap-10 p-5">
            <div className="flex flex-row gap-5">
                <Button link="/" children="Home" disabled={router.pathname === "/"} />
            </div>

            <div className="flex flex-row gap-5 ">
                <Button link={`/profile/${currentUser[0]._id}`} children="Profile" />
                <Button link={`/`} onClick={Logout}>Logout</Button>
                <h1>{currentUser.name}</h1>
            </div>
        </div>
    )
}

export default ProfileNavBar;