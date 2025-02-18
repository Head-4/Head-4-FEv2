import {axiosInstance} from "../index";

const postKakaoToken = async (code: string) => {
    try {
        const response = await axiosInstance.post(`/api/v1/login/kakao/${code}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default postKakaoToken;