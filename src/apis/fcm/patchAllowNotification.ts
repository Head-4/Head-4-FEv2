import {axiosInstance} from "../index";

const patchAllowNotification = async (allow: boolean) => {
    try {
        const response = await axiosInstance.patch(`/api/v1/user/notify/${allow}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default patchAllowNotification;