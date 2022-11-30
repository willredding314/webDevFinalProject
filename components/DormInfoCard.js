const DormInfoCard = ({ dorm }) => {

    return (
        <div className="flex flex-col w-full max-w-3xl p-5 bg-white border rounded-lg shadow-md border-errie-dark/20">

            <div className="flex flex-row justify-between">
                <h1 className="pb-2 text-2xl font-medium text-left text-eerie-dark">
                    {dorm.name}
                </h1>
                <span className="flex flex-row flex-wrap justify-around gap-1 text-sm text-cadet">
                    <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                        {/* <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg> */}
                        {dorm.rating.numRatings} Rating{dorm.rating.numRatings > 1 ? "s" : ""}
                        <span className="flex flex-row flex-wrap gap-1 pl-2 text-xs text-gray-500 align-middle rating">
                            {Array(Math.round(dorm.rating.overall)).fill().map((_, i) => (
                                <input disabled type="radio" name="rating-2" className="w-3 h-3 cursor-default mask mask-star bg-carrot" value={i+1} />
                            ))}
                        </span>
                        {/* {dorm.rating.overall} */}
                    </span>
                </span>
            </div>  

            <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-2">
                    <p className="flex flex-col text-left text-charcoal text-md">
                        <span>Northeastern University</span>
                        <span>{`${dorm.location.street}, ${dorm.location.city}, ${dorm.location.state} ${dorm.location.zip}`}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DormInfoCard;