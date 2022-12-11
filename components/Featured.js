import DormCard from '@/components/DormCard';
import { useQuery } from 'react-query';


import Error from '@/components/Error';
import Loading from '@/components/Loading';

const Featured = () => {

    const { isLoading, error, data } = useQuery('dorms', async () => {
        const res = await fetch(`http://localhost:4000/api/dorms`);
        return res.json();
    });
        

    if (isLoading) return (
        <Loading />
    )

    if (error) return (
        <Error />
    )
    
    const featuredDorms = data.sort(() => Math.random() - 0.5).slice(0, 6);

    return (
        <div className="flex flex-row flex-wrap items-center justify-center h-full gap-10 p-10">
            {featuredDorms.slice(0, 6).map((dorm) => (
                <DormCard dorm={dorm} key={dorm._id} />
            ))}
        </div>
    );
};

export default Featured;