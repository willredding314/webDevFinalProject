import Link from "next/link";
import DormCard from "@/components/DormCard";

const School = ({ school }) => {
    school = school[0]

    return (
        <div className="flex flex-col items-center justify-center h-full px-10 py-2">
            <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-3xl">
                <figure className="flex flex-col items-center justify-center">
                    <img src="https://placeimg.com/800/800/arch" className="rounded-lg w-full" />
                <figcaption className="text-center">    
                        <h1 className="text-4xl font-bold text-left">{school.name}</h1>
                        <p className="text-xl font-semibold">{school.location.street}</p>
                    </figcaption>
                </figure>
                <div className="flex flex-row gap-5 mt-5">
                    <div className="flex flex-col gap-2">
    

                    </div>
                </div>
            </div>
        </div>
    )
};
    
const getStaticProps = async ({ params: { sid } } ) => {
    const res = await fetch(`http://localhost:4000/api/schools/id/${sid}`);
    const school = await res.json();

    return {
        props: {
            school,
        },
    };
};

const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:4000/api/schools`);
    const schools = await res.json();
    
    const paths = schools.map((school) => ({
        params: { sid: school._id },
    }));

    return {
        paths,
        fallback: false,
    };
};

export { getStaticProps, getStaticPaths };
export default School;
