import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import NavKeyWord from "./components/NavKeyWord";
import NoticeItem from "../../components/NoticeItem";
import {useInView} from 'react-intersection-observer';
import {Keyword} from "../../types";
import Typography from "../../components/Typography";
import {useUserKeywords} from "../keyword/hooks/useUserKeywords";
import {useArticles} from "./hooks/useArticles";

export default function Main() {
    const userKeywords = useUserKeywords();
    const [selectedKeyWord, setSelectedKeyWord] = useState<string>("null");
    const {data, fetchNextPage, isFetchingNextPage, hasNextPage} = useArticles(selectedKeyWord);
    const {ref, inView} = useInView();

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView])

    const clickKeyWord = (keyword: string) => {
        setSelectedKeyWord(keyword);
    };

    return (
        <>
            <MainNav>
                <NavUl>
                    <NavKeyWord
                        key="all"
                        it={{notifyId: -1, keyword: "null"}}
                        isSelected={selectedKeyWord === "null"}
                        clickKeyWord={clickKeyWord}
                    >
                        전체
                    </NavKeyWord>
                    {userKeywords.data?.map((it: Keyword) =>
                        <NavKeyWord
                            key={it.notifyId}
                            it={it}
                            isSelected={selectedKeyWord === it.keyword}
                            clickKeyWord={clickKeyWord}
                        >
                            {it.keyword}
                        </NavKeyWord>
                    )}
                </NavUl>
            </MainNav>
            <MainSection>
                {data?.pages[0]?.articles.length === 0 ?
                    <Typography typoSize="T1" textAlign="center" style={{color: "#B2B2B2", margin: "auto"}}>
                        곧 새로운 공지를<br/>가져올게요!</Typography>
                    :
                    <MainNoticeUl>
                        {data?.pages.map((page) =>
                            page?.articles.map((notice) =>
                                <NoticeItem
                                    key={notice.id}
                                    notice={notice}
                                />
                            )
                        )}
                        <div ref={ref}></div>
                    </MainNoticeUl>
                }
            </MainSection>
        </>
    );
}

const MainNav = styled.nav`
    margin-top: 8px;
    margin-bottom: 20px;
`;

const NavUl = styled.ul`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

const MainSection = styled.section`
    display: flex;
    flex: 1;
`;

const MainNoticeUl = styled.ul`
    width: 100%;
`;