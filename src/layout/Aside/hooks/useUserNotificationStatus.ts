import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "../../../tanstack-query/constants";
import getUserNotificationStatus from "../../../apis/fcm/getUserNotificationStatus";

export function useUserNotificationStatus() {
    const fallback = false;

    const {data: userNotificationStatus = fallback} = useQuery({
        queryKey: [queryKeys.userNotificationStatus],
        queryFn: getUserNotificationStatus,
        staleTime: Infinity,
    });

    return userNotificationStatus;
}
