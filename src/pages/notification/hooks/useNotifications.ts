import {useInfiniteQuery} from "@tanstack/react-query";
import getNotifications from "../../../apis/notification/getNotifications";
import {queryKeys} from "../../../tanstack-query/constants";

export function useNotifications() {
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
    } = useInfiniteQuery({
        queryKey: [queryKeys.notifications],
        queryFn: ({pageParam = 0}) => getNotifications(pageParam),
        getNextPageParam: (lastPage) => {
            return lastPage?.hasNext ? lastPage.cursor : undefined;
        },
        initialPageParam: 0,
        staleTime: 60 * 1000,
    });

    return {data, fetchNextPage, isFetchingNextPage, hasNextPage};
}