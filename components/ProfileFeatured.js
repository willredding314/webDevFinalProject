import { useQuery } from 'react-query';

// WIP
const ProfileFeatured = ({ dorms, currentUser }) => {
    const allDorms = dorms

    console.log('allDorms: ', allDorms)
    console.log('currentUser: ', currentUser)

    console.log('currentUser.university: ', currentUser.university)
    console.log('dorm.university: ', allDorms[0].university)
    
    const featuredDorms = allDorms.filter(dorm => dorm.university === currentUser.university).sort(() => Math.random() - 0.5).slice(0, 6);

    // if (featuredDorms.length < 6) {

    // }    

    console.log(featuredDorms)

    return (
        <div className="flex flex-row flex-wrap items-center justify-center h-full gap-10 p-10">
            {featuredDorms.slice(0, 6).map((dorm) => (
                <DormCard dorm={dorm} key={dorm._id} />
            ))}
        </div>
    );
}

export default ProfileFeatured;