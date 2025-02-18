import {useMutation, useQueryClient} from "@tanstack/react-query";
import patchUserNotificationStatus from "../../../apis/fcm/patchUserNotificationStatus";
import {queryKeys} from "../../../tanstack-query/constants";

export function usePatchUserNotificationStatus() {
    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationFn: (allow: boolean) => patchUserNotificationStatus(allow),
        onSuccess: (data) => {
            console.log('success: ', data);
            queryClient.invalidateQueries({queryKey: [queryKeys.userNotificationStatus]})
        },
        onError: (error) => {
            console.error("Error: ", error);
        },
    });

    return mutate;
}