import Link from "next/link";
import { useQuery } from 'react-query';
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Loading from '@/components/Loading';
import Error from '@/components/Error';

const DormCard = ({dorm}) => {
    console.log(dorm.university);

    const { isLoading, error, data } = useQuery('university', async () => {
        const res = await fetch(`http://localhost:4000/api/schools/id/${dorm.university}`);
        return res.json();
    });

    if (isLoading) return (
        <div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="flex items-center mt-4 space-x-3">
                <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )

    if (error) return (
        null
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