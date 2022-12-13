import Button from "@/components/Base/Button";
import Input from "@/components/Base/Input";
import { useState } from "react";

const Search = () => {

    const [search, setSearchOption] = useState("dorms");
    const [targetVal, setTarget] = useState();

    const changeHandler = event => {
        setTarget(event.target.value)
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-2 drop-shadow-sm">
            <h1 className="font-medium text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cadet to-charcoal">
                Rate My Dorm
            </h1>

            <h1 className="pb-2 text-xl font-medium text-center text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-cadet to-charcoal">
                Enter a <span className="text-cadet" onClick={() => setSearchOption("dorms")}>Dorm</span> or <span className="text-cadet" onClick={() => setSearchOption("schools")}>School</span> name to search.
            </h1>

            <div className="flex flex-row justify-center w-full gap-3">
                <input type='text' placeholder={`Find ${search}...`} onChange={changeHandler} className="px-4 py-2 font-normal transition duration-200 ease-in-out rounded bg-cultured" />
                <Button link={`/results/${search}/${targetVal}`} children="Search" />
            </div>
        </div>
    )
}

export default Search