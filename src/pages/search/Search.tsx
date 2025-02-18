import React, {useEffect, useState} from 'react';
import NoticeItem from "../../components/NoticeItem";
import styled from "styled-components";
import {ReactComponent as SearchIcon} from "../../assets/Search/SearchIcon.svg";
import {useInView} from "react-intersection-observer";
import {useInfiniteQuery} from "@tanstack/react-query";
import getArticles from "../../apis/main/getArticles";
import Typography from "../../components/Typography";
import debounce from 'lodash/debounce';

export default function Search() {
    const [searchInput, setSearchInput] = useState<string>('');
    const [debouncedSearch, setDebouncedSearch] = useState<string>('');
    const {ref, inView} = useInView();

    useEffect(() => {
        const debouncedUpdate = debounce(() => {
            setDebouncedSearch(searchInput);
        }, 300);

        debouncedUpdate();
        return () => debouncedUpdate.cancel();
    }, [searchInput]);

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage && debouncedSearch) {
            fetchNextPage();
        }
    }, [inView])

    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
    } = useInfiniteQuery({
        queryKey: ["articles", debouncedSearch],
        queryFn: ({pageParam = 0}) => getArticles(pageParam, debouncedSearch),
        getNextPageParam: (lastPage) => {
            return lastPage?.hasNext ? lastPage.cursor : undefined;
        },
        staleTime: 100000,
        initialPageParam: 0,
        enabled: debouncedSearch !== '',
    });

    const inputSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <>
            <SearchTopDiv>
                <Typography typoSize="H3" color="Black" style={{marginBottom: "12px"}}>무엇을<br/>찾고 계신가요?</Typography>
                <Typography typoSize="B2_medium" color="Gray600">내가 설정한 키워드가 포함된 공지만 검색돼요</Typography>
                <SearchInputDiv>
                    <SearchIcon/>
                    <SearchInput type="text"
                                 value={searchInput}
                                 onChange={inputSearchChange}
                                 placeholder="검색 키워드를 입력하세요"
                    />
                </SearchInputDiv>
            </SearchTopDiv>
            <SearchListSection>
                {searchInput === '' ? (
                    <></>
                ) : data?.pages[0]?.articles.length === 0 ? (
                    <Typography typoSize="B1_semibold" color="Black" textAlign="center" style={{margin: "24px auto 0"}}>
                        검색 결과를 찾을 수 없어요</Typography>
                ) : (
                    <ul>
                        {data?.pages.map((page) =>
                            page?.articles.map((notice) =>
                                <NoticeItem
                                    key={notice.id}
                                    searchInput={searchInput}
                                    notice={notice}
                                />
                            )
                        )}
                    </ul>
                )}
            </SearchListSection>
            <div ref={ref}></div>
        </>
    );
}

const SearchTopDiv = styled.div`
    padding: 12px 20px 28px;
    background-color: ${({theme}) => theme.White};
    width: calc(100% + 40px);
    transform: translateX(-20px);
`;

const SearchInputDiv = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
    padding: 16px 20px;
    border: 1px solid ${({theme}) => theme.LightGray};
    border-radius: 12px;
    margin-top: 28px;
`;

const SearchInput = styled.input`
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    color: ${({theme}) => theme.Black};

    &::placeholder {
        color: #ADADAD;
    }
`;

const SearchListSection = styled.section`
    padding-top: 20px;
    flex: 1;
`;