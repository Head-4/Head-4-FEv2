import {axiosInstance} from "../index";

const postUserKeyword = async (keyword: string) => {
    try {
        const response = await axiosInstance.post(`/api/v1/user/add/keyword/${keyword}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default postUserKeyword;