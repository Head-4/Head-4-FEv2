import React from 'react';
import styled from "styled-components";
import {highlightText} from "../utils/highlightText";
import {formatDate} from "../utils/dateFormatting";
import {NoticeType} from "../types";
import Typography from "./Typography";

interface NoticeProps {
    notice: NoticeType;
    searchInput?: string
}

export default function NoticeItem({notice, searchInput = ''}: NoticeProps) {
    return (
        <NoticeLi>
            <a href={notice.url}>
                <Typography typoSize="B1_semibold" color="Black" style={{marginBottom: '4px'}}>
                    {highlightText(notice.title, searchInput, 16)}
                </Typography>
                <Typography typoSize="B2_semibold" color="Gray400">{formatDate(notice.date)}</Typography>
            </a>
        </NoticeLi>
    );
}
const NoticeLi = styled.li`
    margin-bottom: 12px;
    padding: 16px 20px;
    border-radius: 12px;
    border: 1px solid ${({theme}) => theme.Background};
    background-color: ${({theme}) => theme.White};

    &:active {
        border: 1px solid ${({theme}) => theme.White};
    }
`;