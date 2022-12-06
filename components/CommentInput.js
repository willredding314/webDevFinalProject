import { useState } from 'react';

const CommentInput = ({ rows, placeholder }) => {
    const [comment, setComment] = useState('');

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const submitComment = () => {
        console.log(comment.length);
        if (comment.length > 0) {
            console.log(comment);
        }
        
    }

    // const createComment = async (comment) => {
    //     const res = await fetch('http://localhost:4000/api/comments', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(comment)
    //     });

    //     const data = await res.json();
    //     console.log(data);
    // };


    return (
        <div className="w-full mb-4 rounded-lg bg-gray-50">
            <div className="px-4 py-2 bg-white border rounded-lg border-eerie-dark/20">
                <textarea id="comment" rows={rows} className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0 " placeholder={placeholder} required onChange={handleChange}>{comment}</textarea>
            </div>
            <div className="flex flex-row-reverse items-center justify-between px-3 py-2 bg-white">
                <button onClick={submitComment} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-charcoal rounded-lg hover:bg-cadet">
                    Post comment
                </button>
            </div>
        </div>
    )
}

export default CommentInput;