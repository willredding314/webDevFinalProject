import Comment from "@/components/Comment";
import moment from "moment/moment";

const CommentSection = ({ props }) => {

    return (
        <div className="flex flex-col w-full max-w-3xl p-5 bg-white border rounded-lg shadow-md border-errie-dark/20">
            <Comment placeholder="Leave a comment..." />
            <h1 className="w-full max-w-3xl p-2 pb-2 mx-auto mb-5 text-lg font-medium text-left border border-opacity-25 rounded-lg text-charcoal border-errie-dark/20">
                Comments
            </h1>

            <div className="flex flex-col gap-5">
                {props.length > 0 ? props.map((comment) => (
                    <div className="flex flex-col w-full max-w-3xl p-5 bg-white rounded-lg">
                        <div className="flex flex-row flex-wrap justify-between justify-items-end">
                            <h1 className="pb-2 font-medium text-left text-opacity-75 text-md text-eerie-dark">
                                {comment.text} 
                            </h1>
                            <span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded h-4 justify-center">
                                <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                                {moment(comment.date).fromNow()}
                            </span>

                        </div>
                        <Comment placeholder="Reply" />
                    </div>
                )) : (
                    <p className="p-2 font-medium text-left text-opacity-75 text-md text-charcoal">
                        No comments yet. Be the first to comment!
                        <span className="pt-2"> 😊</span>

                    </p>
                )}
            </div>
        </div>
    )
}

export default CommentSection;