import {useQuery} from "react-query";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import FriendInfo from "@/components/FriendInfo";

const Friends = ({friendsList}) => {
  const { isLoading, error, data } = useQuery('users', async () => {
    const res = await fetch(`http://localhost:4000/api/users`);
    return res.json();
  });


  if (isLoading) return (
      <p>Loading...</p>
  )

  if (error) return (
      <p>Error</p>
  )

  const friends = data.filter((friend) => (
      friendsList.includes(friend._id)
  ))
  return (
      friends
      .map((friend) => (
          <FriendInfo friend={friend}/>
      ))
  )
}

export default Friends;