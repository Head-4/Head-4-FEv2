import {axiosInstance} from "../index";

const getKeywordList = async () => {
    try {
        const response = await axiosInstance.get(`api/v1/user/keywords`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default getKeywordList;