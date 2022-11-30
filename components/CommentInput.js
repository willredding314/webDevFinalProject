const CommentInput = ({ rows, placeholder }) => {

    return (
        <form>
            <div className="w-full mb-4 rounded-lg bg-gray-50">
                <div className="px-4 py-2 bg-white border rounded-lg border-eerie-dark/20">
                    <textarea id="comment" rows={rows} className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0 " placeholder={placeholder} required></textarea>
                </div>
                <div className="flex flex-row-reverse items-center justify-between px-3 py-2 bg-white">
                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-charcoal rounded-lg hover:bg-cadet">
                        Post comment
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CommentInput;

{/* <div class="flex flex-col form-control w-full max-w-3xl gap-5">
<textarea onChange={handleChange}  ref={textAreaRef} rows={1} value={value} placeholder={placeholder} class="textarea textarea-bordered h-10 resize-none bg-white text-eerie-dark " />
<div class="flex flex-row gap-2 justify-end">
    <button class="flex flex-row gap-2 px-5 py-2 bg-white text-eerie-black rounded-lg border border-cultured border-opacity-25">Post</button>
</div>
</div> */}