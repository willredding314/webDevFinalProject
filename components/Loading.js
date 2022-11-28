
const Loading = () => {
    
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold">Loading Content</h1>
            <svg class="pulse h-5 w-5 mr-3" viewBox="0 0 24 24">
                {/* Make loading animation here */}
            </svg>
            <p className="text-xl font-semibold">
                Loading...
            </p>
        </div>
    )
}

export default Loading;