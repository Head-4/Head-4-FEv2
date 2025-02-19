import {useQuery} from "@tanstack/react-query";
import getUserEmail from "../../../apis/login/getUserEmail";
import {queryKeys} from "../../../tanstack-query/constants";

export function useUserEmail() {
    const fallback: string = "";

    const {data: userEmail = fallback} = useQuery({
        queryKey: [queryKeys.userEmail],
        queryFn: getUserEmail,
        staleTime: Infinity,
    });

    return userEmail;
}