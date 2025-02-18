import styled from "styled-components";
import LoadingGif2 from '../../assets/Common/LoadingGif2.gif';
import {useIsFetching, useIsMutating} from "@tanstack/react-query";

export const LoadingPage = () => {
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();
    
    return (
        <>
            {((isFetching > 0) || (isMutating > 0)) && (
                <LoadingWrapper>
                    <LoadingImage src={LoadingGif2} alt="로딩 이미지"/>
                </LoadingWrapper>
            )}
        </>
    );
};

const LoadingWrapper = styled.div`
    z-index: 2000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoadingImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: contain;
`;