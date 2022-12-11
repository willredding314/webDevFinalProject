import { useQuery } from 'react-query';

import CommentSection from '@/components/CommentSection';
import InfoCard from '@/components/DormInfoCard';
import Error from '@/components/Error';
import ImageCard from '@/components/ImageCard';
import Loading from '@/components/Loading';

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

    return (
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 px-10 py-2">
            <ImageCard image={"https://placeimg.com/400/225/arch"} />
            <InfoCard dorm={dorm} />
            <CommentSection props={data} />
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

export { getStaticPaths, getStaticProps };
export default Dorm;
