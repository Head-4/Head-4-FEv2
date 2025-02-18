import {axiosInstance} from "../index";
import {NoticeType} from "../../types";

interface GetMainArticlesResponse {
    articles: NoticeType[];
    hasNext: boolean;
    cursor: number;
}

const getArticles = async (cursor: number, keyword: string): Promise<GetMainArticlesResponse | undefined> => {
    try {
        const response = await axiosInstance.get(`/api/v1/article/page/${cursor}/${keyword}`);
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};

export default getArticles;