import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from "next/link";
const DormCard = ({dorm}) => {

    const ratingEmoji = {
        1: "😡",
        2: "😐",
        3: "🙂",
        4: "😀",
        5: "😍",
    }

    const getRatingEmoji = (rating) => {
        return ratingEmoji[Math.round(rating)]
    }

    return (
        <Link href={`/dorm/${dorm._id}`}>
            <div className="bg-eerie-dark rounded-lg p-5 drop-shadow-sm cursor-pointer hover:drop-shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                <figure className="px-full py-full">
                    <img src="https://placeimg.com/400/225/arch" alt="Dorms" className="rounded-md" />
                </figure>
                <div className="py-10 px-2 items-center text-center">
                    <h1 className="flex flex-row text-xl text-eerie-black font-base text-left gap-3">
                        <span className="flex flex-row gap-1 text-carrot">{dorm.name}</span> | 
                        <span className="flex flex-row gap-1 text-carrot">{dorm.rating.overall}</span>
                        <span className="flex flex-row gap-1 align-middle">{getRatingEmoji(dorm.rating.overall)}</span>
                    </h1>
                
                    <p className="text-left text-eerie-black text-md">
                        <span>Northeastern University</span>
                        <br />
                        <span className="text-sm">
                            {`${dorm.location.street}, ${dorm.location.city}, ${dorm.location.state} ${dorm.location.zip}`}
                        </span>
                    </p> 
                </div>

                <div className="flex flex-row justify-between bg-eerie-dark rounded-lg p-5 -mt-5 border border-cultured border-opacity-25 drop-shadow-sm cursor-pointer hover:drop-shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                    <span className="text-cultured">
                        See More
                    </span>
                    <span className="flex flex-row items-center">
                        <ArrowRightIcon className="w-5 h-5 text-cultured" />
                    </span>
                </div>
            </div> 
        </Link>
    )
}

export default DormCard;