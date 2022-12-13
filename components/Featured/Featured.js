import ProfileFeatured from '@/components/Featured/ProfileFeatured';
import AnonymousFeatured from '@/components/Featured/AnonymousFeatured';

import { useQuery } from 'react-query';
import { useContext } from 'react';
import { CurrentUserContext } from "@/providers/CurrentUserProvider";

import Error from '@/components/Pending/Error';
import Loading from '@/components/Pending/Loading';

const Featured = () => {

    const { currentUser } = useContext(CurrentUserContext);

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
    
    return (
        <div className="flex flex-row flex-wrap items-center justify-center h-full gap-10 p-10">
            {currentUser ? <ProfileFeatured dorms={data} currentUser={currentUser} /> : <AnonymousFeatured dorms={data} />}
        </div>
    );
};

export default Featured;