import React from 'react';
import styled from "styled-components";
import AsideTop from "./components/AsideTop";
import AsideBottom from "./components/AsideBottom";
import AsideLogOut from "./components/AsideLogOut";
import useAsideStore from "../../store/AsideStore";
import Overlay from "../../styles/Common/Overlay";

interface AsideProps {
    pageRoute: string;
}

export default function Aside({pageRoute}: AsideProps) {
    const isAsideOpen = useAsideStore((state) => state.isAsideOpen);
    const toggleAside = useAsideStore((state) => state.toggleAside);

    if (isAsideOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            {pageRoute === "/main" && (
                <>
                    {isAsideOpen && <Overlay onClick={toggleAside}/>}
                    <AsideWrapper $isAsideOpen={isAsideOpen} onClick={(e) => e.stopPropagation()}>
                        <AsideTop/>
                        <AsideBottom/>
                        <AsideLogOut/>
                    </AsideWrapper>
                </>
            )}
        </>
    );
}

const AsideWrapper = styled.aside<{ $isAsideOpen: boolean }>`
    z-index: 1000;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: ${({theme}) => theme.White};
    width: ${({$isAsideOpen}) => $isAsideOpen ? '80%' : '0'};
    opacity: ${({$isAsideOpen}) => $isAsideOpen ? '1' : '0'};
    transition: all 0.2s ease-in-out;

    @media (min-width: 500px) {
        width: ${({$isAsideOpen}) => $isAsideOpen ? '400px' : '0'};
        right: calc(50vw - 250px);
    }
`;