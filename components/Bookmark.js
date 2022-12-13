import DormCard from "@/components/Dorm/DormCard";
import {useQuery} from "react-query";
import Loading from "@/components/Pending/Loading";
import Error from "@/components/Pending/Error";

const Bookmark = ({dorms}) => {

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

    const bookmarkedDorms = data.filter((dorm) => (
        dorms.includes(dorm._id)
    ))
    
    return (
        bookmarkedDorms
        .map((dorm) => (
            <DormCard dorm={dorm}/>
        ))
    )
}

export default Bookmark;