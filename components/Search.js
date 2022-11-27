import Button from "@/components/Button";
import Input from "@/components/Input";

const Search = () => {

    return (
        <div className="flex flex-col gap-5 drop-shadow-sm items-center justify-center w-full h-full">
            <h1 className="text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cadet to-charcoal pb-2">
                Rate My Dorm
            </h1>

            <h1 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cadet to-charcoal pb-2">
                Enter a <span className="text-cadet">school</span> or <span className="text-cadet">dorm</span> name
            </h1>

            <div className="flex flex-row gap-3 justify-center w-full">
                <Input placeholder="Find Schools..." />
                <Button link="/school" children="Search" className="rounded-lg"/>
            </div>
        </div>
    )
}

export default Search