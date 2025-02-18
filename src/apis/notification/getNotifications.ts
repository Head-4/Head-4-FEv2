import {axiosInstance} from "../index";
import {NotificationType} from "../../types";

interface GetNotificationResponse {
    pushLogs: NotificationType[];
    hasNext: boolean;
    cursor: number;
}

const getNotifications = async (cursor: number): Promise<GetNotificationResponse | undefined> => {
    try {
        const response = await axiosInstance.get(`/api/v1/user/notify/page/${cursor}`);
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};

export default getNotifications;