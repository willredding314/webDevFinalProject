
import { useState, useRef, useEffect } from "react";

const autoSizeTextArea = (textAreaRef, value) => {
    useEffect(() => {
        console.log(textAreaRef);
        
        // Limit the textarea height to 156px, maintain scrollHeight and resize the textarea
        if (textAreaRef) {
            textAreaRef.style.height = "0px";
            const scrollHeight = textAreaRef.scrollHeight;
            textAreaRef.style.height = scrollHeight + "px";
        }
    }, [textAreaRef, value]);
};



const Comment = ({ placeholder }) => {

    const [value, setValue] = useState("");
    const textAreaRef = useRef(null);

    autoSizeTextArea(textAreaRef.current, value);

    const handleChange = (evt) => {
        const val = evt.target.value;

        setValue(val);
    };

    return (
        <div class="flex flex-col form-control w-full max-w-3xl gap-5">
            <textarea onChange={handleChange}  ref={textAreaRef} rows={1} value={value} placeholder={placeholder} class="textarea textarea-bordered h-10 resize-none bg-white text-eerie-dark " />
            <div class="flex flex-row gap-2 justify-end">
                <button class="flex flex-row gap-2 px-5 py-2 bg-white text-eerie-black rounded-lg border border-cultured border-opacity-25">Post</button>
            </div>
        </div>
    )
}

export default Comment;