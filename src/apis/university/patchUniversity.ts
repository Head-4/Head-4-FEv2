import {axiosInstance} from "../index";

const patchUniversity = async (name: string) => {
    try {
        const response = await axiosInstance.patch(`/api/v1/user/univ/${name}`);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export default patchUniversity;