import ProfileFeatured from '@/components/ProfileFeatured';
import AnonymousFeatured from '@/components/AnonymousFeatured';

import { useQuery } from 'react-query';
import { useContext } from 'react';
import { CurrentUserContext } from "@/components/CurrentUserProvider";

import Error from '@/components/Error';
import Loading from '@/components/Loading';

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