import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";
import { useEffect } from "react";

const Search = () => {

    const [search, setSearchOption] = useState("dorms");

    return (
        <div className="flex flex-col gap-2 drop-shadow-sm items-center justify-center w-screen h-screen">
            <h1 className="text-8xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cadet to-charcoal">
                Rate My Dorm
            </h1>

            <h1 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cadet to-charcoal pb-2 text-center cursor-pointer">
                Enter a <span className="text-cadet" onClick={() => setSearchOption("dorms")}>Dorm</span> or <span className="text-cadet" onClick={() => setSearchOption("school")}>School</span> name to search.
            </h1>

            <div className="flex flex-row gap-3 justify-center w-full">
                <Input placeholder={`Find ${search}...`} className="title" onChange={(e) => setText(e.target.value)} />
                <Button link={`/${search}`} children="Search" />
            </div>
        </div>
    )
}

export default Search