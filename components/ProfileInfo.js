const ProfileInfo = ({user}) => {
  return (
      <div>
        <h5 className="text-2xl text-center font-bold tracking-tight text-eerie-dark">{user.username}</h5>
        <h2 className="text-2xl font-bold tracking-tight text-eerie-dark">Bio</h2>
        <p>{user.bio}</p>
        <h2 className="text-2xl font-bold tracking-tight text-eerie-dark">University</h2>
        <p>{user.university}</p>
        <h2 className="text-2xl font-bold tracking-tight text-eerie-dark">Major</h2>
        <p>{user.major}</p>
      </div>
  )
}
export default ProfileInfo