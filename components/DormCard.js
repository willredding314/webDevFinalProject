import Link from "next/link";
import { useQuery } from 'react-query';
import { ArrowRightIcon } from '@radix-ui/react-icons'
import LoadingCard from '@/components/Loading';
import Error from '@/components/Error';

const DormCard = ({dorm}) => {

    const { isLoading, error, data } = useQuery('university', async () => {
        const res = await fetch(`http://localhost:4000/api/schools/id/${dorm.university}`);
        return [{
            _id: "1",
            _name: "Northeastern"
        }]
        //return res.json();
    });

    if (isLoading) return (
        <LoadingCard />
    )

    if (error) return (
        <Error />
    )

    return (
        <div className="max-w-sm bg-white border rounded-lg shadow-md border-eerie-dark/20">
            <Link href={`/dorm/${dorm._id}`}>
                <img className="rounded-t-lg" src="https://placeimg.com/400/225/arch" alt={dorm.name} />
            </Link>
            <div className="p-5">
                <h5 className="text-2xl font-bold tracking-tight text-eerie-dark">{dorm.name} <span className="font-normal text-cadet">| {dorm.rating.overall}</span></h5>
                <p className="mb-3 font-normal text-cadet">
                    
                    <Link href={`/school/${data[0]._id}`} className="text-cadet hover:text-eerie-dark">{data[0].name}</Link>
                    <br />
                    <span className="text-sm text-cadet">{`${dorm.location.street}, ${dorm.location.city}, ${dorm.location.state} ${dorm.location.zip}`} </span>
                </p>
                <Link href={`/dorm/${dorm._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition duration-200 ease-in-out rounded-lg bg-charcoal/90 hover:bg-charcoal focus:ring-4 focus:outline-none">
                    See More
                    <span className="flex flex-row items-center">
                        <ArrowRightIcon className="w-8 h-5 pl-2 text-cultured" />
                    </span>
                </Link>
            </div>
        </div>
    )        

}

export default DormCard;