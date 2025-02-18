import React from 'react';
import styled from "styled-components";
import {Keyword} from "../../../types";

interface NavKeyWordProps {
    it: Keyword;
    isSelected: boolean;
    clickKeyWord: (keyword: string) => void;
    children: string;
}

export default function NavKeyWord({it, isSelected, clickKeyWord, children}: NavKeyWordProps) {
    return (
        <li>
            <NavKeyWordButton
                onClick={() => clickKeyWord(it.keyword)}
                $isSelected={isSelected}
            >
                {children}
            </NavKeyWordButton>
        </li>
    );
}

const NavKeyWordButton = styled.button<{ $isSelected: boolean }>`
    padding: 8px 18px 8px 18px;
    border-radius: 20px;
    border: 1px solid ${({theme}) => theme.LightGray};
    font-size: 14px;
    font-weight: 600;
    color: ${({$isSelected, theme}) => $isSelected ? theme.White : theme.Gray600};
    background-color: ${({$isSelected, theme}) => $isSelected ? theme.Blue : theme.White};
`;