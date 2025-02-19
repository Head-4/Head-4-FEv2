import React, {useState} from 'react';
import styled from "styled-components";
import KeyWord from "./components/KeyWord";
import KeyWordInputSection from "./components/KeyWordInputSection";
import CommonButton from "../../components/CommonButton";
import NotificationModal from "../utilPages/NotificationModal";
import {Keyword} from "../../types";
import Typography from "../../components/Typography";
import {useUserKeywords} from "./hooks/useUserKeywords";
import {useDeleteUserKeyword} from "./hooks/useDeleteUserKeyword";
import {usePostUserKeyword} from "./hooks/usePostUserKeyword";

export default function KeyWordEdit() {
    const userKeywords = useUserKeywords();
    const deleteUserKeyword = useDeleteUserKeyword();
    const postUserKeyword = usePostUserKeyword();

    const [keyWord, setKeyWord] = useState<string>('');
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('최대 5개까지 추가할 수 있어요');

    const isFirst = JSON.parse(localStorage.getItem('isFirst') || 'false');
    const isAddActive: boolean = keyWord.length > 0;
    const isMax: boolean = userKeywords.data?.length >= 5;

    const addKeyWordClick = async (keyword: string) => {
        if (userKeywords.data?.some((item: Keyword) => item.keyword === keyword)) {
            setErrorMessage('같은 키워드는 추가할 수 없어요');
            return;
        }
        setKeyWord('');
        setErrorMessage('최대 5개까지 추가할 수 있어요');
        postUserKeyword(keyword);
    }

    const clickButton = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            <NotificationModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            <KeywordSection>
                {isFirst &&
                    <Typography typoSize="H3" color="Black" style={{marginBottom: "32px"}}>
                        보고 싶은 공지의<br/>키워드를 입력해 주세요</Typography>}
                <KeyWordInputSection
                    keyWord={keyWord}
                    setKeyWord={setKeyWord}
                    isAddActive={isAddActive}
                    isMax={isMax}
                    setIsInputFocused={setIsInputFocused}
                    addKeyWordClick={addKeyWordClick}
                />
                <NoticeP
                    $isMax={isMax}
                    $isInputFocused={isInputFocused}
                    $isError={errorMessage === '같은 키워드는 추가할 수 없어요'}
                >
                    {errorMessage}
                </NoticeP>
                <KeyWordWrapper>
                    {userKeywords.data?.map((it: Keyword) =>
                        <KeyWord
                            key={it.notifyId}
                            it={it}
                            deleteUserKeyword={deleteUserKeyword}
                        />
                    )}
                </KeyWordWrapper>
            </KeywordSection>
            {isFirst && (
                <CommonButton onClick={clickButton} isActive={true}>
                    다음
                </CommonButton>
            )}
        </>
    );
}

const KeywordSection = styled.section`
    margin-top: 24px;
`;

const NoticeP = styled.p<{ $isMax: boolean; $isInputFocused: boolean; $isError: boolean }>`
    margin-top: 12px;
    color: ${({$isError, $isMax, $isInputFocused}) =>
            $isError ? '#BD0000' : $isMax && $isInputFocused ? '#BD0000' : '#ADADAD'};
    font-size: 14px;
    font-weight: 500;
`;

const KeyWordWrapper = styled.div`
    margin-top: 36px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;