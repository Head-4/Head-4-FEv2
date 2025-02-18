import React from 'react';
import styled from "styled-components";
import {dateAgo} from "../../../utils/dateFormatting";
import {NotificationType} from "../../../types";
import {TextOverflow} from "../../../styles/Common/TextOverflow";
import Typography from "../../../components/Typography";

interface NotificationDetailProps {
    it: NotificationType;
}

export default function NotificationDetail({it}: NotificationDetailProps) {
    return (
        <DetailLi>
            <a href={it.url}>
                <DetailHead>
                    <DetailKeyword typoSize="B1_semibold" color="Blue">
                        '{it.keyword}' 새로운 공지
                    </DetailKeyword>
                    <DetailTime>
                        {dateAgo(it.createdDate)}
                    </DetailTime>
                </DetailHead>
                <Typography typoSize="B1_medium" color="Gray600">
                    {it.title}
                </Typography>
            </a>
        </DetailLi>
    );
}

const DetailLi = styled.li`
    padding: 20px 0;
`;

const DetailHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
`;

const DetailKeyword = styled(Typography)`
    ${TextOverflow}
`;

const DetailTime = styled.span`
    color: #C0C0C0;
    font-size: 12px;
    font-weight: 500;
`;