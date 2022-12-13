import moment from "moment/moment";
import CommentInput from "@/components/Comments/CommentInput";

import { useQuery } from "react-query";

const Comment = ({ comment }) => {

    const { isLoading, error, data } = useQuery("users", async () => {
        const res = await fetch(`http://localhost:4000/api/users/id/${comment.createdBy}`);
        return res.json();
    });
    
    console.log(data)
    if (isLoading) return (
        <p>Loading...</p>
    )

    if (error) return (
        <p>Error</p>
    )
    
    return (
        comment && (
            <div className="flex flex-col w-full max-w-3xl gap-4 p-5 bg-white rounded-lg">
                <div className="flex flex-row justify-between gap-2">
                    <div className="flex flex-row gap-2">
                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-gray-600 dark:text-gray-300">{data[0].username.charAt(0).toUpperCase()}</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-lg font-medium text-eerie-dark">{data[0].username}</h1>
                            <h1 className="text-sm font-medium text-eerie-dark/50">{moment(comment.date).fromNow()}</h1>
                        </div>


                    <div className="flex flex-row-reverse gap-2 px-5 py-2 hover:text-eerie-dark">
                        <button className="text-red-400 bg-white rounded-lg border-cultured hover:text-eerie-dark ">Delete</button>
                    </div> 
                    
                    </div>
                </div>
                <div className="w-full mb-4 rounded-lg bg-gray-50">
                    <div className="px-4 py-2 bg-white border rounded-lg border-eerie-dark/20">
                        <p className="text-sm font-medium text-eerie-dark">{comment.text}</p>
                    </div>
                </div>
                <CommentInput placeholder="Reply" rows={1} />
            </div>  
        )
    )
}

export default Comment;