import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";

const Search = () => {

    const [search, setSearchOption] = useState("dorms");

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-2 drop-shadow-sm">
            <h1 className="font-medium text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cadet to-charcoal">
                Rate My Dorm
            </h1>

            <h1 className="pb-2 text-xl font-medium text-center text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-cadet to-charcoal">
                Enter a <span className="text-cadet" onClick={() => setSearchOption("dorms")}>Dorm</span> or <span className="text-cadet" onClick={() => setSearchOption("school")}>School</span> name to search.
            </h1>

            <div className="flex flex-row justify-center w-full gap-3">
                <Input placeholder={`Find ${search}...`} className="title" onChange={(e) => setText(e.target.value)} />
                <Button link={`/${search}`} children="Search" />
            </div>
        </div>
    )
}

export default Search