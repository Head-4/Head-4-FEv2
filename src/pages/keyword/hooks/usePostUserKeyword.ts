import {useMutation, useQueryClient} from "@tanstack/react-query";
import {queryKeys} from "../../../tanstack-query/constants";
import postUserKeyword from "../../../apis/keyword/postUserKeyword";

export function usePostUserKeyword() {
    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationFn: (keyword: string) => postUserKeyword(keyword),
        onSuccess: (data) => {
            console.log("Success: ", data);
            queryClient.invalidateQueries({queryKey: [queryKeys.userKeywords]});
        },
        onError: (error) => {
            console.error("Error: ", error);
        },
    });

    return mutate;
}