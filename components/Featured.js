import DormCard from '@/components/DormCard';
import { useQuery } from 'react-query';

const Featured = () => {
    const { isLoading, error, data } = useQuery('dorms', () =>
        fetch('http://localhost:4000/api/dorms').then((res) => res.json())
    );


    if (isLoading) return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold">Featured Content</h1>
            <p className="text-xl font-semibold">
                Loading...
            </p>
        </div>
    )

    if (error) return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold">Error</h1>
            <p className="text-xl">There was an error loading the content</p>
        </div>
    )
    
    const featuredDorms = data.sort(() => Math.random() - 0.5).slice(0, 4);

    return (
        <div className="flex flex-row flex-wrap items-center justify-center h-full gap-10 p-10">
            {featuredDorms.slice(0, 4).map((dorm) => (
                <DormCard dorm={dorm} />
            ))}
        </div>
    );
};

export default Featured;