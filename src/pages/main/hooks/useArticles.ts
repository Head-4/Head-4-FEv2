import {useInfiniteQuery} from "@tanstack/react-query";
import getArticles from "../../../apis/main/getArticles";
import {generateArticlesKey} from "../../../tanstack-query/key-generator";

export function useArticles(keyword: string) {
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
    } = useInfiniteQuery({
        queryKey: generateArticlesKey(keyword),
        queryFn: ({pageParam = 0}) => getArticles(pageParam, keyword),
        getNextPageParam: (lastPage) => {
            return lastPage?.hasNext ? lastPage.cursor : undefined;
        },
        staleTime: 60 * 1000,
        initialPageParam: 0,
        enabled: keyword !== '',
    });

    return {data, fetchNextPage, isFetchingNextPage, hasNextPage};
}