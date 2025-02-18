import {axiosInstance} from "../index";

const getUserUniversity = async () => {
    try {
        const response = await axiosInstance.get(`api/v1/user/university`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default getUserUniversity;