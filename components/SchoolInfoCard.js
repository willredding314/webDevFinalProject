import Loading from '@/components/Loading';
import Error from '@/components/Error';
import DormCard from '@/components/DormCard';

import { useQuery } from 'react-query';

const SchoolInfoCard = ({ school }) => {

    const { isLoading, error, data } = useQuery('schools', async () => {
        const res = await fetch(`http://localhost:4000/api/schools/id/${school._id}`);
        return res.json();
    });

    console.table(data);
    console.table(school);

    if (isLoading) return (
        <Loading />
    )

    if (error) return (
        <Error />
    )
    

    return ( 

        <div className="flex flex-col w-full max-w-3xl p-5 bg-white border rounded-lg shadow-md border-errie-dark/20">
            <div className="flex flex-row justify-between gap-10">
                <div className="flex flex-col">
                    <h1 className="pb-2 text-2xl font-medium text-left text-eerie-dark">
                        {school.name}
                    </h1>
            
                    <p className="flex flex-col text-left text-charcoal text-md">
                        <span>{`${school.location.street}, ${school.location.city}, ${school.location.state} ${school.location.zip}`}</span>
                    </p>
                </div>
                
                <div className="flex-col bg-gray-100 text-gray-800 text-sm font-sm inline-flex px-2.5 py-2 rounded mr-2">
                    <div className="flex flex-row-reverse pb-5">
                        <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                            {new Intl.NumberFormat().format(school.stats.size) + ` Students`}
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(school.stats.cost)}
                        </span>
                        <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                            {school.stats.ownership}
                        </span>
                    </div>
                    <div>
                        {school.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolInfoCard;