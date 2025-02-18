import {axiosInstance} from "../index";

const getUserKeywords = async () => {
    try {
        const response = await axiosInstance.get(`api/v1/user/keywords`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default getUserKeywords;