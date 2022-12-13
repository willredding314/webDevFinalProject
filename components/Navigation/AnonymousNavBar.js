import Button from "@/components/Base/Button";
import { useRouter } from "next/router";

const AnonymousNavBar = () => {

    const router = useRouter();
    
    return (
        <div className="flex flex-row justify-between w-full gap-10 p-5">
            <div className="flex flex-row gap-5">
                <Button link="/" children="Home" disabled={router.pathname === "/"} />
            </div>

            <div className="flex flex-row gap-5">
                <Button link="/login" children="Login" />
                <Button link="/register" children="Register" />
            </div>
        </div>
    )
}

export default AnonymousNavBar;