import {queryKeys} from "./constants";

export const generateArticlesKey = (keyword: string) => {
    return [queryKeys.articles, keyword];
}