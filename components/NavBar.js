import ProfileNavBar from "@/components/ProfileNavBar";
import AnonymousNavBar from "@/components/AnonymousNavBar";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "@/components/CurrentUserProvider";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const { currentUser } = useContext(CurrentUserContext);

    useEffect(() => {
        if (currentUser) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [currentUser])

    return (
        <div>
            {!!currentUser ? <ProfileNavBar name={currentUser[0]} /> : <AnonymousNavBar />}
        </div>
    )
}

export default Navbar;