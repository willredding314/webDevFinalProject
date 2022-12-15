import DormCard from "@/components/Dorm/DormCard";
import {useQuery} from "react-query";
import Loading from "@/components/Pending/Loading";
import Error from "@/components/Pending/Error";
import {useContext, useEffect} from "react";
import {DormContext} from "@/providers/DormProvider";

const Bookmark = ({ dorms }) => {
    const bookmarkedDorms = dorms;

    const { dorm } = useContext(DormContext);
    // dorm.forEach((d) => {
    //     console.log(d)
    //     console.log(bookmarkedDorms)
    // });

    bookmarkedDorms.forEach((d) => {
        if (dorm.includes(d._id)) {
            console.log(d);
        }
    })

    return (
     null
    )
}

export default Bookmark;