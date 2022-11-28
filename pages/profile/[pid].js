import {useQuery} from "react-query";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const Profile = ({ profile }) => {
    profile = profile[0];
    const { isLoading, error, data } = useQuery("users", async () => {
        const res = await fetch(`http://localhost:4000/api/users/${profile._id}`);
        return res.json();
    });

    if (isLoading) return (
        <Loading />
    )

    if (error) return (
        <Error />
    )
    return (
        <div>Profile</div>
    )

    return(
      <div>
          Hello
      </div>
    );
};

const getStaticProps = async ({ params: { pid } } ) => {
    const res = await fetch(`http://localhost:4000/api/users/id/${pid}`);
    const user = await res.json();

    return {
        props: {
            user,
        },
    };
};

const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:4000/api/users`);
    const users = await res.json();

    const paths = users.map((profile) => ({
        params: { pid: profile._id },
    }));

    return {
        paths,
        fallback: false,
    };
};

export { getStaticProps, getStaticPaths };
export default Profile;