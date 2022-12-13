import ProfileNavBar from "@/components/Navigation/ProfileNavBar";
import AnonymousNavBar from "@/components/Navigation/AnonymousNavBar";

import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "@/providers/CurrentUserProvider";

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
            {!!isActive ? <ProfileNavBar user={currentUser[0]} /> : <AnonymousNavBar />}
        </div>
    )
}

export default Navbar;