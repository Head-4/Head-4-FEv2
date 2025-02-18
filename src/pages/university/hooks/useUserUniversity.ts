import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "../../../tanstack-query/constants";
import getUserUniversity from "../../../apis/university/getUserUniversity";

export function useUserUniversity() {
    const fallback = "";

    const {data: userUniversity = fallback} = useQuery({
        queryKey: [queryKeys.userUniversity],
        queryFn: getUserUniversity,
        staleTime: Infinity,
    });

    return userUniversity;
}