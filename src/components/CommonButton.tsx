import React from 'react';
import styled from "styled-components";

interface CommonButtonProps {
    isActive: boolean;
    onClick: () => void;
    children: string;
}

export default function CommonButton({onClick, children, isActive}: CommonButtonProps) {
    return (
        <CommonButtonWrapper onClick={onClick} $isActive={isActive}>
            {children}
        </CommonButtonWrapper>
    );
}

const CommonButtonWrapper = styled.button<{ $isActive: boolean }>`
    margin-top: 36px;
    width: 100%;
    font-weight: 600;
    font-size: 18px;
    color: ${({$isActive,theme}) => $isActive ? theme.Background : theme.Gray400};
    border-radius: 12px;
    background-color: ${({$isActive, theme}) => $isActive ? theme.Blue : theme.Gray50};
    padding: 18px 0;
`;