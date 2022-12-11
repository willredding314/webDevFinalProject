import DormCard from "@/components/DormCard";
import {useQuery} from "react-query";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const Bookmark = ({dorms}) => {

  const { isLoading, error, data } = useQuery('dorms', async () => {
    const res = await fetch(`http://localhost:4000/api/dorms`);
    return res.json();
  });


  if (isLoading) return (
      <Loading />
  )

  if (error) return (
      <Error />
  )

  const bookmarkedDorms = data.filter((dorm) => (
      dorms.includes(dorm._id)
  ))
  return (
      bookmarkedDorms
      .map((dorm) => (
          <DormCard dorm={dorm}/>
      ))
  )
}

export default Bookmark;