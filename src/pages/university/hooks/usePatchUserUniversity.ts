import {useMutation, useQueryClient} from "@tanstack/react-query";
import patchUserUniversity from "../../../apis/university/patchUserUniversity";
import {queryKeys} from "../../../tanstack-query/constants";

export function usePatchUserUniversity() {
    const queryClient = useQueryClient();

    const {mutateAsync} = useMutation({
        mutationFn: (university: string) => patchUserUniversity(university),
        onSuccess: (data) => {
            console.log("Success: ", data);
            queryClient.invalidateQueries({queryKey: [queryKeys.userUniversity]});
            queryClient.invalidateQueries({queryKey: [queryKeys.articles]});
        },
        onError: (error) => {
            console.error("Error: ", error);
        },
    });

    return mutateAsync;
}