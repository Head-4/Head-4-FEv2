import {useMutation} from "@tanstack/react-query";
import patchUserFcmToken from "../../../apis/fcm/patchUserFcmToken";

export function usePatchUserFcmToken() {
    const {mutateAsync} = useMutation({
        mutationFn: (userFcmToken: string) => patchUserFcmToken(userFcmToken),
        onSuccess: (data) => {
            console.log('success: ', data);
        },
        onError: (error) => {
            console.error("Error: ", error);
        },
    });

    return mutateAsync;
}