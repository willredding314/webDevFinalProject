import {useQuery} from "react-query";
import Bookmark from "@/components/Bookmark";

const Profile = ({ profile }) => {
    profile = profile[0];

    console.log(profile);
    //TODO add profile settings on left side of page when user logged in
    return (
        <div className="grid grid-cols-3 divide-x">
            <div className=" grid justify-center ">
            </div>
            <div className=" grid justify-center">
                <h5 className="text-2xl font-bold tracking-tight text-eerie-dark">Bookmarks</h5>
                <Bookmark dorms={profile.bookmarks}/>
                <br/>

            </div>
            <div className="grid justify-center">
                <div>
                    <h5 className="text-2xl font-bold tracking-tight text-eerie-dark">{profile.username}</h5>
                    <p>{profile.bio}</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
};

const getStaticProps = async ({ params: { pid } } ) => {
    const res = await fetch(`http://localhost:4000/api/users/id/${pid}`);
    const profile = await res.json();

    return {    
        props: {
            profile,
        },
    };
};

const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:4000/api/users`);
    const users = await res.json();

    const paths = users.map((profile) => ({
        params: {
            pid: profile._id,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export { getStaticProps, getStaticPaths };
export default Profile;