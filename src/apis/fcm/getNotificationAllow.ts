import {axiosInstance} from "../index";

const getNotificationAllow = async () => {
    try {
        const response = await axiosInstance.get(`api/v1/user/allow`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default getNotificationAllow;