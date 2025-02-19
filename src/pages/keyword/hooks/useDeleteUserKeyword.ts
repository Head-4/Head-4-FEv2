import {useMutation, useQueryClient} from "@tanstack/react-query";
import {queryKeys} from "../../../tanstack-query/constants";
import deleteUserKeyword from "../../../apis/keyword/deleteUserKeyword";

export function useDeleteUserKeyword() {
    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationFn: (notifyId: number) => deleteUserKeyword(notifyId),
        onSuccess: (data) => {
            console.log('success: ', data);
            queryClient.invalidateQueries({queryKey: [queryKeys.userKeywords]})
        },
        onError: (error) => {
            console.error("Error: ", error);
        },
    });

    return mutate;
}