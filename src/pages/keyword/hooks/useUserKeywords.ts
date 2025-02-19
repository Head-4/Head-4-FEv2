import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "../../../tanstack-query/constants";
import getUserKeywords from "../../../apis/keyword/getUserKeywords";

export function useUserKeywords() {
    const fallback: string[] = [];

    const {data: userKeywords = fallback} = useQuery({
        queryKey: [queryKeys.userKeywords],
        queryFn: getUserKeywords,
        staleTime: Infinity,
    });

    return userKeywords;
}