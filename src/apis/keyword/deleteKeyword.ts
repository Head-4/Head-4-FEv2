import {axiosInstance} from "../index";

const deleteKeyword = async (notifyId: number) => {
    try {
        const response = await axiosInstance.delete(`/api/v1/user/delete/keyword/${notifyId}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default deleteKeyword;