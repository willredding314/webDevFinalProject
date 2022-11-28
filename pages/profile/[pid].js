import {useQuery} from "react-query";

const Profile = ({ profile }) => {
    profile = profile[0];

    console.log(profile);
    
    return (
        <div>Profile</div>
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