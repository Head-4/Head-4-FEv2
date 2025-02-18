export interface Keyword {
    notifyId: number;
    keyword: string;
}

export interface NotificationType {
    createdDate: string;
    keyword: string;
    pushId: number;
    title: string;
    url: string;
}

export interface NoticeType {
    id: number;
    title: string;
    date: string;
    url: string;
}