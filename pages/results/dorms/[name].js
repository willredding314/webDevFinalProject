import DormCard from "@/components/DormCard";
import { useRouter } from "next/router";
import { useQuery } from 'react-query';

import Error from '@/components/Error';
import Loading from '@/components/Loading';

const DormResults = () => {

  const router = useRouter()

  const { isLoading, error, data } = useQuery("results", async () => {
    const res = await fetch(`http:///localhost:4000/api/results/dorms/${router.query.name}`);
    return res.json();
  })

  if (isLoading) return (
    <Loading />
  )

  if (error) return (
    <Error />
  )

  return (
    <main className="grid grid-cols-1 grid-rows-3 h-screen">
      <div className="flex flex-col row-span-1 p-5 gap-20">
        {data.map((dorm) => (
          <DormCard dorm={dorm} key={dorm._id} />
        ))}
      </div>
    </main>
  )
}

//const getStaticProps = async ({ params: { name } } ) => {
//    const res = await fetch(`http://localhost:4000/api/results/dorms/${name}`);
//    const dorms = await res.json();
//
//    return {
//        props: {
//            dorms,
//        },
//    };
//};

//export { getStaticProps };
export default DormResults;