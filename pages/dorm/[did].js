import Link from "next/link";

const Dorm = ({ dorm }) => {
    dorm = dorm[0]
    
    return (
        <div className="flex flex-col items-center justify-center h-full px-10 py-2">
            <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-3xl">
                <figure className="flex flex-col items-center justify-center">
                    <img src="https://placeimg.com/400/225/arch" className="rounded-lg w-full" />
                <figcaption className="text-center">    
                        <h1 className="text-4xl font-bold text-left">{dorm.name}</h1>
                        <p className="text-xl font-semibold">{dorm.location.street}</p>
                    </figcaption>
                </figure>
                <div className="flex flex-row gap-5 mt-5">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold">Reviews</h1>
                        <p className="text-xl">{dorm.rating.overall}</p>
                    </div>
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
