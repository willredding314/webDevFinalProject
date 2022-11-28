import Comment from "@/components/Comment";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { useQuery } from "react-query";
import moment from "moment";

const Dorm = ({ dorm }) => {
    dorm = dorm[0];

    const { isLoading, error, data } = useQuery("comments", async () => {
        const res = await fetch(`http://localhost:4000/api/comments/dorm/${dorm._id}`);
        return res.json();
    });

    if (isLoading) return (
        <Loading />
    )

    if (error) return (
        <Error />
    )


    // TODO: Handle comment replies
    // TODO: Handle comment likes

    

    return (
        <div className="flex flex-col items-center justify-center h-full py-2 gap-5 w-full px-10">
            <div className="rounded-lg shadow-xl w-full max-w-3xl border border-eerie-dark border-opacity-75">
                <figure className="flex flex-col items-center justify-center">
                    <img src="https://placeimg.com/400/225/arch" className="rounded-lg w-full" />
                </figure>
            </div>

            <div className="flex flex-col bg-eerie-dark w-full max-w-3xl rounded-lg p-5">
                <h1 className="text-2xl text-left font-medium text-eerie-black pb-2 text-carrot">
                    {dorm.name}
                </h1>

                <div className="flex flex-row gap-5">
                    <div className="flex flex-row gap-2">
                        <p className="text-left text-eerie-black text-md">
                            <span>{`${dorm.location.street}, ${dorm.location.city}, ${dorm.location.state} ${dorm.location.zip}`}</span>
                        </p>

                        <span className="flex flex-row gap-1">
                            | {dorm.rating.overall}
                            <span className="flex flex-row gap-1 align-middle rating pt-1">
                                {Array(Math.round(dorm.rating.overall)).fill().map((_, i) => (
                                    <input disabled type="radio" name="rating-2" className="mask mask-star bg-carrot w-4 h-4 cursor-default" value={i+1} />
                                ))}
                            </span>
                        </span>
                    </div>
                </div>
            </div>

            <Comment placeholder="Leave a comment..." />

            <div className="flex flex-col bg-eerie-dark w-full max-w-3xl rounded-lg p-5">
                <h1 className="text-lg text-left font-medium text-eerie-black pb-2 text-cadet border border-cadet border-opacity-25 rounded-lg p-2 w-full max-w-3xl mx-auto mb-5">
                    Comments
                </h1>

                <div className="flex flex-col gap-5">
                    {data.length > 0 ? data.map((comment) => (
                        <div className="flex flex-col bg-eerie-dark w-full max-w-3xl rounded-lg p-5">
                            <div className="flex flex-row justify-between flex-wrap justify-items-end">
                                <h1 className="text-md text-left font-medium text-eerie-black pb-2 text-cultured text-opacity-75">
                                    {comment.text} 
                                </h1>
                                <span className="text-md text-left font-medium text-eerie-black pb-2 text-cultured text-opacity-75">
                                    {moment(comment.date).fromNow()}
                                </span>

                            </div>
                            <Comment placeholder="Reply" />
                        </div>
                    )) : (
                        <p className="text-md text-left font-medium text-eerie-black p-2 text-cultured text-opacity-75">
                            No comments yet. Be the first to comment!
                            <span className="pt-2"> 😊</span>

                        </p>
                    )}
                </div>
            </div>
        </div>
    )
};

const getStaticProps = async ({ params: { did } } ) => {
    const res = await fetch(`http://localhost:4000/api/dorms/id/${did}`);
    const dorm = await res.json();

    return {
        props: {
            dorm,
        },
    };
};

const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:4000/api/dorms`);
    const dorms = await res.json();
    
    const paths = dorms.map((dorm) => ({
        params: { did: dorm._id },
    }));

    return {
        paths,
        fallback: false,
    };
};

export { getStaticProps, getStaticPaths };
export default Dorm;
