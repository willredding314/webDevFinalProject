import Button from "@/components/Button";

const AnonymousNavBar = () => {

    return (
        <div className="flex flex-row gap-10 justify-between p-5 w-full">
            <div className="flex flex-row gap-5">
                <Button link="/" children="Home" />
            </div>

            <div className="flex flex-row gap-5">
                <Button link="/login" children="Login" />
                <Button link="/register" children="Register" />
            </div>
        </div>
    )
}

export default AnonymousNavBar;