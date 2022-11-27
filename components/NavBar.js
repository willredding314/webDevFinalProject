import Button from "@/components/Button";

const NavBar = () => {

    return (
        <div className="flex flex-row gap-10 justify-between p-5">
            <div className="flex flex-row gap-5">
                <Button link="/" children="Home" />
            </div>

            <div className="flex flex-row gap-5">
                <Button link="/profile" children="Profile" />
            </div>
        </div>
    )
}

export default NavBar;